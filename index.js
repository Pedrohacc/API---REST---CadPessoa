const customapp = require('./config/customapp');
const conexao = require('./banco/conexao')
const tabelas = require ('./banco/tabelas')
const app = customapp();



conexao.connect(erro=>{

    if(erro){
        console.log('Erro na conexão com o banco de dados');
    }else{

        tabelas.init(conexao);

        app.listen(3000,( erro)=>{
            if(erro){
                console.log(`Erro ao startar o servidor na porta desejada = ${erro}`);
            } else{
                console.log('Servidor rodando na porta 3000');
            }
        
        })



    }



})


      
