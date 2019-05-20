# React into docker project

## Run your test environment

Enter in **frontend** folder and type the following command in your terminal:
   
```sh
docker-compose up -d react-app-dev
```

## Run your tests with your environment up:

```sh
docker-compose up -d react-app-dev && docker-compose up -d rtests --build 
```

## Run your tests with your prod environment up:

```sh

```