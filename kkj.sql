drop database projeto;
CREATE DATABASE PROJETO;
USE PROJETO;

CREATE TABLE ALUNO(
	ID INT NOT NULL auto_increment,
    NOME VARCHAR(100) NOT NULL,
    CPF BIGINT NOT NULL unique,
    ENDERECO VARCHAR(100) NULL,
    TELEFONE BIGINT NULL,
    PRIMARY KEY(ID)
);

INSERT INTO ALUNO(NOME, CPF, ENDERECO, TELEFONE)
VALUES('TIAGO', 123456, 'RUA A, BROTAS', 71888888);
INSERT INTO ALUNO
VALUES(0, 'DANIEL', 11111, 'RUA B, FG', 71999999);

INSERT INTO ALUNO(NOME, CPF, ENDERECO, TELEFONE)
VALUES('Jair Messias Bolsonaro', 78945698745, 'RUA A, BROTAS', 71977554466);
INSERT INTO aluno(NOME, CPF, ENDERECO, TELEFONE)
VALUES('Luis Inacio Lula da Silva', 96314785278, 'RUA B, LAPA', 71988779966);

select * from aluno