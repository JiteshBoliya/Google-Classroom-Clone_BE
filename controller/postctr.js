const post = require('../model/post')
exports.get_post= async function(req, res){
    const Post=post.find({},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}
exports.set_post=async function(req, res){
    const Post=new post(req.body)
    try {
        await Post.save()
        res.status(201).send({Post})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}