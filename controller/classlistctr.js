const classlist = require('../model/ClassList')

// #Add classlist
exports.set_classlist=async function(req, res){
    const Classlist=new classlist(req.body)
    try {
        await Classlist.save()
        res.status(201).send({Classlist})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

// #Get joined class
exports.get_classlist= async function(req, res){
    const Classlist=classlist.find({user:req.params.id},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}