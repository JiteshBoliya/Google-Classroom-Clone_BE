const comment =require('../model/comment')
exports.Add_comment=async function(req,res){
    const Comment=new comment(req.body)
    try {
        await Comment.save()
        res.status(201).send({Comment})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}
exports.get_Comment= async function(req, res){
    const Comment=comment.find({postid:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
        // console.log(data);
    }).populate("owner","name")
}

exports.count_comment=async function(req,res){
    const Comment = comment.count({},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
        // console.log(data);
    })
}