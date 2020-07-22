# dockerBase

# dockerBase

### Comandos do projeto

[raiz do projeto]

<montando imagem do DB> docker build -t mysql-image -f api/database/Dockerfile .

(-t = tage do nome; -f = pasta ou caminho)

<rodando o DB> docker run -d --rm --name mysql-container mysql-image

(-d = detect para não travar o terminal; --rm = remove o container caso já exista; --name = nome do container criado)

<rodando o DB espelhando em localhost> docker run -d -v $(pwd)/api/database/data:/var/lib/mysql --rm --name mysql-container mysql-image

(-d = detect para não travar o terminal; -v = volume; --rm = remove o container caso já exista; --name = nome do container criado)


<executando o DB> docker exec -i mysql-container mysql -uadmin -plililalalulu < api/database/script.sql

(exec = execução em um container online; -i = iterativo)

<inspesionar o DB> docker exec -it mysql-container /bin/bash


[pasta api]

<instalação de nodemon> sudo npm install nodemon
npm init

sudo npm install --save-dev nodemon

sudo npm install --save express mysql


[raiz do projeto]

(<montando imagem da API> docker build -t node-image -f api/Dockerfile .
)

<rodando DB espelhando em localhost> docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --rm --name node-container node-image

(docker run -d -v $(pwd)/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image
)

<inspesionar app> docker inspect mysql-container


