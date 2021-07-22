const  pessoamodel = require('../model/pessoamodel');


module.exports = app =>{

    app.get('/pessoa', (req, res)=>{

        res.render('index.ejs');
       
 
    })
    app.post('/envio', (req, res) =>{
        const pessoaform = req.body
        pessoamodel.informar(pessoaform);
       
        
    })

}
        