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
create table personagem(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45)
);

create table votacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT, 
	FOREIGN KEY(fk_usuario) REFERENCES usuario(id),
    fk_personagem INT,
    FOREIGN KEY (fk_personagem) REFERENCES personagem(id)
);
insert into usuario values 
(null, 'a' , 'a@gmail.com', 'teste1', 'teste1'),
(null, 'b', 'b@gmail.com', 'teste1','teste1');

insert into personagem (nome)values
('Luffy'),
('Zoro'),
('Sanji'),
('Usopp'),
('Nami'),
('Chopper'),
('Robin'),
('Franky'),
('Brook');

insert into votacao (fk_usuario,fk_personagem)values
(1,2),
(2,2);

select * from aviso;
select * from usuario;
select * from personagem;
select * from votacao;
select count(*) from votacao where fk_personagem = 9;
SELECT fk_personagem, COUNT(*) as "Votos" FROM votacao GROUP BY fk_personagem ORDER BY fk_personagem ASC;