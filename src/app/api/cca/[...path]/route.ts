import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { ccaApiUrl } from "@/lib/cca/client";

async function proxy(req: NextRequest, path: string[]) {
  const target = ccaApiUrl("/" + path.join("/"));
  const jar = await cookies();
  const cookieParts: string[] = [];
  const instructor = jar.get("pull_instructor")?.value;
  const day = jar.get("pull_day")?.value;
  if (instructor) cookieParts.push(`pull_instructor=${instructor}`);
  if (day) cookieParts.push(`pull_day=${day}`);

  const headers = new Headers();
  const ct = req.headers.get("content-type");
  if (ct) headers.set("content-type", ct);
  if (cookieParts.length) headers.set("cookie", cookieParts.join("; "));

  const init: RequestInit = {
    method: req.method,
    headers,
    redirect: "manual",
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = await req.arrayBuffer();
  }

  const upstream = await fetch(target + (req.nextUrl.search || ""), init);
  const outHeaders = new Headers();
  const outCt = upstream.headers.get("content-type");
  if (outCt) outHeaders.set("content-type", outCt);

  const res = new NextResponse(upstream.body, { status: upstream.status, headers: outHeaders });
  const setCookies =
    typeof upstream.headers.getSetCookie === "function" ? upstream.headers.getSetCookie() : [];
  for (const line of setCookies) {
    res.headers.append("set-cookie", line.replace(/;\s*Domain=[^;]+/i, ""));
  }
  return res;
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}
export async function POST(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}
export async function PUT(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}
export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
