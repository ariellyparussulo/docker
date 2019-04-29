# Use an existing docker image as base
FROM alpine
# set DNS server and install redis
RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf && \ 
    echo "search companydomain" >> /etc/resolv.conf && \    
    apk add --update redis
# tell the image that to do when it starts as a container
CMD ["redis-server"]
