const conexao = require('../banco/conexao')

class Pessoamodel{

   informar(pessoaform){

            const sql = "INSERT INTO pessoa SET ?";

        conexao.query(sql, pessoaform, (erro)=>{
        if(erro){
        console.log(erro);
        }else{
        
            console.log('Sucesso');
        }
        
        })
        

    }




}

module.exports = new Pessoamodel