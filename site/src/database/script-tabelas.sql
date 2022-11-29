CREATE DATABASE onewill;

USE onewill;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	confirmacaoSenha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table votacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    voto_luffy INT,
    voto_zoro INT,
    voto_sanji INT,
    voto_nami INT,
    voto_usopp INT,
    voto_chopper INT,
	voto_robin INT,
    voto_franky INT,
    voto_brook INT,
    fk_usuario INT, 
	FOREIGN KEY(fk_usuario) REFERENCES usuario(id)
);

insert into usuario()
values (null, 'a' , 'a@gmail.com', 'teste1'),
(null, 'b', 'b@gmail.com', 'teste1');

insert into votacao ()
values (null,1, 0 , 0 ,0 , 0 ,0 , 0 ,0 , 0 , 1),
(null, 0, 1 , 0, 0 , 0 ,0 , 0 ,0 , 0 ,2);