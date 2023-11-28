FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

RUN mkdir -p /etc/nginx/certs \
    && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/nginx/certs/self-signed.key \
        -out /etc/nginx/certs/self-signed.crt \
        -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]