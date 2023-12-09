FROM nginx

EXPOSE 80 443

COPY nginx.conf /etc/nginx/nginx.conf

# For deployment
COPY private.key /etc/nginx/certs/private.key
COPY certificate.crt /etc/nginx/certs/certificate.crt
COPY ca_bundle.crt /etc/nginx/certs/ca_bundle.crt

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]