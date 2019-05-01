# README file

## Description:

This container was created to run a nodeJS application inside a Docker Container. 

## Running the Container:

To use this docker container you must run the following command line:

```bash
     # build the Dockerfile instructions and generate a image called nodejs/webapp
     docker build -t nodejs/webapp .
    # run the docker image create openning the 8080 port to use the API
     docker run -p 8080:8080 -t nodejs/webapp
```

## Project files:

* Dockerfile: docker instructions to build the nodejs container.
* index.js: API code
* package.json: package controller used by nodeJS. 
