FROM nginx:1.21.3

# nginxの設定ファイルをコピー
#COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/ssl/server.password /etc/nginx/ssl/server.password
COPY docker/nginx/ssl/server.crt /etc/nginx/ssl/server.crt
COPY docker/nginx/ssl/server.key /etc/nginx/ssl/server.key

#COPY ssl/server.password /etc/nginx/ssl/server.password
COPY docker/nginx/ssl/fullchain.pem /etc/nginx/ssl/fullchain.pem
COPY docker/nginx/ssl/privkey.pem /etc/nginx/ssl/privkey.pem
