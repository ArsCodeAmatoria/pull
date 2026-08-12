# syntax=docker/dockerfile:1

FROM golang:1.23-alpine AS build
WORKDIR /src
RUN apk add --no-cache ca-certificates git
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/cca-api ./cmd/api

FROM alpine:3.21
RUN apk add --no-cache ca-certificates tzdata \
  && adduser -D -H -u 1000 cca \
  && mkdir -p /data \
  && chown cca:cca /data
WORKDIR /app
COPY --from=build /out/cca-api /app/cca-api
USER cca
ENV CCA_API_ADDR=:8080
ENV CCA_DATA_DIR=/data
EXPOSE 8080
CMD ["/app/cca-api"]
