const repository = require('../repositories/produto-repository')

exports.get = async(req,res,next)=>{
    const data = await repository.get();
    return res.status(200).send(data);

}

exports.post = async(req, res) =>{
    await repository.create(req.body)
    res.status(201).send({mensagem : "Criado com sucesso!"})
} 