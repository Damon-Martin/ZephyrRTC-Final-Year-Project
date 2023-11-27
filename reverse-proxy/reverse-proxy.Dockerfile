FROM node:18
EXPOSE 443

WORKDIR /reverse-proxy



# Production
COPY . .
CMD ["npx", "local-ssl-proxy", "--key", "./private.key.pem", "--cert", "./domain.cert.pem", "--source", "443", "--target",  "3000"]