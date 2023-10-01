const express = require('express');
const conexao = require('./conexao');
const bodyParser = require('body-parser');
const Aluno = require('./modelo/Aluno');

const app = express();
app.use( express.static( "files" ) );

const editar = (req)=>{
    const alvo = req.body;
    nome = alvo.nome? `"nome":"${alvo.nome}",` : "";
    cpf = alvo.cpf? `"cpf":"${alvo.cpf}",` : "";
    endereco = alvo.endereco? `"endereco":"${alvo.endereco}",` : "";
    telefone = alvo.telefone? `"telefone":"${alvo.telefone}",` : "";
    texto = `${nome}${cpf}${endereco}${telefone}`
    texto = texto.slice(0, -1);
    const obj = JSON.parse(`{${texto}}`);
    return obj;
}

app.set('view engine', 'ejs');
app.set('views','./view');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json())

conexao.connect(erro  => {
    if(erro){
        console.log(erro);
    }else{
        app.listen(3000, ()=> console.log('servidor rodando na porta 3000'));
    }
});

app.get('/home', function(req,res){
    //res.sendFile(__dirname+'/view/Aluno.html');
    conexao.query('SELECT * from Aluno', function(erro, Alunos){
    res.render('home', {Alunos});

    })
});

// Aluno

app.get('/Aluno', function(req,res){
    conexao.query('SELECT * from Aluno', function(erro, Alunos){
        res.render('Aluno', {Alunos});
    });
});
app.post('/Aluno/cadastrar', (req, res)=>{
    const aluno = req.body;
    console.log(aluno);
    try{

        Aluno.add(aluno);
        conexao.query('SELECT * from Aluno', function(erro, Alunos){
            res.render('Aluno', {Alunos});
        });

    }catch(e){
        console.log('Error: '+e);
    }
});
app.post('/Aluno/editar',(req, res)=>{
    const id = parseInt(req.body.id);
    const obj = editar(req);
    try{
        Aluno.update(id,obj,res);
        conexao.query('SELECT * from Aluno', function(erro, Alunos){
            res.render('Aluno', {Alunos});
        });
    }catch(e){
        console.log('Error: '+e);
    }
});
app.post('/Aluno/deletar',(req, res)=>{
    const id = parseInt(req.body.id);
    try{
        Aluno.delete(id,res);
        conexao.query('SELECT * from Aluno', function(erro, Alunos){
            res.render('Aluno', {Alunos});
        });
    }catch(e){
        console.log('Error: '+e);
    }
});