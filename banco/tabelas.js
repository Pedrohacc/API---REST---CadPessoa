class tabelas{

    init(conexao){
        this.conexao = conexao;
        this.criartabelapessoa();
    }

    criartabelapessoa(){
        const sql = 'CREATE TABLE if not exists pessoa (id int not null auto_increment, nome varchar(100) not null, cpf varchar(11) not null, PRIMARY KEY(id)) '
   
        this.conexao.query(sql, (erro)=>{
            if(erro){
                console.log('Erro ao criar a tabela');
            }else{
                console.log('Sucesso na Criação!');
            }
        })
    }

}

module.exports = new tabelas