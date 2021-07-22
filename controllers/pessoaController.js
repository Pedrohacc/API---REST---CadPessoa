const  pessoamodel = require('../model/pessoamodel');


module.exports = app =>{

    app.post('/envio', (req, res) =>{
        res.render('index.ejs');
        const pessoaform = req.body
        pessoamodel.informar(pessoaform);
       
        
    })

}
        