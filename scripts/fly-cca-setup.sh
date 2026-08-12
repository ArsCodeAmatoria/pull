# Fly deploy (from repo root)
#
# 1. Log in once:  ~/.fly/bin/fly auth login
# 2. Create + deploy:  npm run cca:fly:setup
#
# App: ridgetechone-cca  Region: sjc  URL: https://ridgetechone-cca.fly.dev

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
API="$ROOT/api"
export PATH="${HOME}/.fly/bin:${PATH}"

if ! fly auth whoami >/dev/null 2>&1; then
  echo "Not logged in. Run: fly auth login"
  exit 1
fi

cd "$API"

if ! fly apps list -q 2>/dev/null | grep -qx 'ridgetechone-cca'; then
  fly apps create ridgetechone-cca --org personal 2>/dev/null \
    || fly apps create ridgetechone-cca
fi

# Secrets from local .env (ridgetechone Supabase)
load_env() {
  local key="$1"
  python3 - <<PY
from pathlib import Path
for line in Path("$ROOT/.env").read_text().splitlines():
    line=line.strip()
    if line.startswith("$key="):
        print(line.split("=",1)[1].strip().strip('"'))
        break
PY
}

CCA_DATABASE_URL="$(load_env CCA_DATABASE_URL)"
CCA_JWT_SECRET="$(load_env CCA_JWT_SECRET)"
BOOTSTRAP="$(load_env INSTRUCTOR_BOOTSTRAP_PASSWORD)"
ARCHIVE="$(load_env CCA_ARCHIVE_EMAIL)"
BRANCH="$(load_env CCA_BRANCH_EMAIL)"
APP_URL="$(load_env NEXT_PUBLIC_APP_URL)"

# Prefer the production Vercel URL for CORS / join links
APP_URL="${APP_URL:-https://pull-seven.vercel.app}"
if [[ "$APP_URL" == *"localhost"* ]]; then
  APP_URL="https://pull-seven.vercel.app"
fi

# Pooler-friendly URL for Fly (same as Vercel)
if [[ "$CCA_DATABASE_URL" =~ @db\.([^.]+)\.supabase\.co:5432 ]]; then
  REF="${BASH_REMATCH[1]}"
  PW="$(python3 - <<PY
from pathlib import Path, urllib.parse
raw=Path("$ROOT/.env").read_text()
for line in raw.splitlines():
    if line.startswith("CCA_DATABASE_URL="):
        u=line.split("=",1)[1].strip().strip('"')
        print(urllib.parse.urlparse(u).password or "")
        break
PY
)"
  CCA_DATABASE_URL="postgresql://postgres.${REF}:${PW}@aws-0-us-west-1.pooler.supabase.com:5432/postgres?sslmode=require"
fi

fly secrets set \
  "CCA_DATABASE_URL=${CCA_DATABASE_URL}" \
  "CCA_JWT_SECRET=${CCA_JWT_SECRET:-dev-change-me-cca-jwt}" \
  "INSTRUCTOR_BOOTSTRAP_PASSWORD=${BOOTSTRAP:-changeme}" \
  "CCA_ARCHIVE_EMAIL=${ARCHIVE:-credentials@localhost}" \
  "CCA_BRANCH_EMAIL=${BRANCH:-}" \
  "NEXT_PUBLIC_APP_URL=${APP_URL}" \
  "CCA_DATA_DIR=/data"

# Volume (idempotent-ish)
if ! fly volumes list -a ridgetechone-cca 2>/dev/null | grep -q cca_data; then
  fly volumes create cca_data --region sjc --size 1 --yes -a ridgetechone-cca
fi

fly deploy -a ridgetechone-cca
echo
echo "API: https://ridgetechone-cca.fly.dev/health"
curl -fsS "https://ridgetechone-cca.fly.dev/health" || true
echo
