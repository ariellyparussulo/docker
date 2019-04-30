# create a container from the lastest alpine image
FROM node:alpine

# create folder to run our applicaation
WORKDIR /opt/node_app/

# copy code into container
COPY . .

# install dependencies from package.json
RUN npm install

# expose 8080 port
EXPOSE 8080

# run node server
CMD ["npm", "start"]