CREATE DATABASE IF NOT EXISTS lililalalulu;
USER admin;

CREATE TABLE IF NOT EXISTS products (
id INT(11) AUTO_INCREMENT,
name VARCHAR (255),
price DECIMAL (10, 2),
PRIMARY KEY (id)
);

INVERT INTO products VALUE(0, 'Curso Especialista', 2500);
INVERT INTO products VALUE(0, 'Curso FullStack', 3500);


