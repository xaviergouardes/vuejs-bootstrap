# pour builder :  docker build -t xboilerplatevuejs .
# pour lancer le container :  docker run --name vuejs -p 8081:80 -d xboilerplatevuejs
# pour accèder à l'appli : http://localhost:8081

FROM alpine:3.8

RUN     echo "@edge http://nl.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories && \
	apk update && apk upgrade

RUN apk add nodejs npm && \
	apk add nginx && \
	mkdir /run/nginx && touch /run/nginx/nginx.pid

RUN echo "server {" > /etc/nginx/conf.d/default.conf && \
	  echo "listen 80;" >> /etc/nginx/conf.d/default.conf && \
	  echo "server_name  localhost;" >> /etc/nginx/conf.d/default.conf && \
	  echo "location / {" >> /etc/nginx/conf.d/default.conf && \
	  echo "	root   /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf && \
	  echo "	index  index.html index.htm;" >> /etc/nginx/conf.d/default.conf && \
	  echo "}"	>> /etc/nginx/conf.d/default.conf && \
	  echo "}" >> /etc/nginx/conf.d/default.conf && \
	  mkdir -p /usr/share/nginx/html



ADD . /tmp
	
RUN cd /tmp	&& \
    npm install && \
	npm run build && \
	cp -R /tmp/dist/* /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]