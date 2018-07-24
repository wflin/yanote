docker rm -f yanote-server;
docker rm -f yanote-client;
docker build -t tmy/yanote-server .;
docker run -d -p 8888:8888 --name yanote-server tmy/yanote-server;
docker run --name yanote-client -d -p 8080:80 -v /usr/docker/nginx/html:/usr/share/nginx/html nginx;
