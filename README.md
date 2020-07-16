# dockerBase

### Comandos do projeto

<montando imagem do DB> docker build -t mysql-image -f api/db/Dockerfile .
(-t = tage do nome; -f = pasta ou caminho)

<rodando o DB> docker run -d --rm --name mysql-container mysql-image
(-d = detect para não travar o terminal; --rm = remove o container caso já exista; --name = nome do container criado)

<rodando o DB espelhando em localhost> docker run -d -v $(pwd)/api/db/data:/var/lib/mysql --rm --name mysql-container mysql-image
(-d = detect para não travar o terminal; -v = volume; --rm = remove o container caso já exista; --name = nome do container criado)


<executando o DB> docker exec -i mysql-container mysql -uroot -plililalalulu < api/db/script.sql
(exec = execução em um container online; -i = iterativo)


