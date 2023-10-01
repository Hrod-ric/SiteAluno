const conexao = require('../conexao');

class Aluno{
    add(Aluno){
        const sql = 'INSERT INTO Aluno SET ?';
        conexao.query(sql, Aluno, (erro, resultado)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        });
    }

    update(id, valores, res){
        const sql = 'UPDATE Aluno SET ? WHERE id = ?'
        
        conexao.query(sql, [valores, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }
        });
    }

    delete(id, res){
        const sql = 'DELETE FROM Aluno where id=?';
        conexao.query(sql, id, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }
        });
    }
}

module.exports = new Aluno;