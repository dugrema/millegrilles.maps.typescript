FROM debian:trixie-slim

LABEL description="PMTiles tile server"

ARG PMTILES_VERSION=1.31.2
ARG PMTILES_ARCH=x86_64

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl ca-certificates && \
    rm -rf /var/lib/apt/lists/* && \
    curl -fsSL "https://github.com/protomaps/go-pmtiles/releases/download/v${PMTILES_VERSION}/go-pmtiles_${PMTILES_VERSION}_Linux_${PMTILES_ARCH}.tar.gz" -o pmtiles.tar.gz && \
    tar -xzf pmtiles.tar.gz pmtiles && \
    mv pmtiles /usr/local/bin/pmtiles && \
    rm pmtiles.tar.gz

RUN mkdir -p /data

EXPOSE 2112

ENTRYPOINT ["pmtiles"]
CMD ["serve", "/data", "--interface=0.0.0.0", "--port=2112"]
