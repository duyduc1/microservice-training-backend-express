# Sử dụng official Kong image
FROM kong:3.6

COPY kong.yml /usr/local/kong/declarative/kong.yml

ENV KONG_DATABASE=off \
    KONG_DECLARATIVE_CONFIG=/usr/local/kong/declarative/kong.yml \
    KONG_PROXY_ACCESS_LOG=/dev/stdout \
    KONG_ADMIN_ACCESS_LOG=/dev/stdout \
    KONG_PROXY_ERROR_LOG=/dev/stderr \
    KONG_ADMIN_ERROR_LOG=/dev/stderr \
    KONG_PROXY_LISTEN=0.0.0.0:8000, \
    KONG_ADMIN_LISTEN=0.0.0.0:8001

EXPOSE 8000 8001 

CMD ["kong", "docker-start"]
