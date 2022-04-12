const classsub = require('../model/class')
exports.get_class= async function(req, res){
    const ClassSub=classsub.find({},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}
exports.set_class=async function(req, res){
    console.log(req.body)
    const classSub=new classsub(req.body)
    console.log(req.headers)
    console.log(classSub)
    try {
        await classSub.save()
        res.status(201).send({classSub})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}