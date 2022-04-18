const post = require('../model/post')

// #Get post
exports.get_post= async function(req, res){
    const Post=post.find({classsub:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
        console.log(data);
    }).populate("owner","name")
}   

// #Add post
exports.set_post=async function(req, res){
    const Post=new post(req.body)
    try {
        await Post.save()
        res.status(201).send({Post})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

// #update post
// exports.update_post = async (req, res) => {
//     try {
//         const Post = await post.findOne({ _id: req.body.id, owner: req.user._id })
//         if (!Post) return res.status(400).send({ error: "Product not found" })
//         Post['text'] = req.body.text
//         await Post.save()
//         res.send(Post)
//     } catch (error) {
//         res.status(500).send({ error: error.message })
//     }
// }

// // #delete post
// exports.delete_post = async (req, res) => {
//     try {
//         const Post = await post.findByIdAndDelete({ _id: req.body.id, owner: req.user._id })
//         if (!Post) res.status(404).send({ error: error.message })
//         res.status(200).send({ success: "Deleted...." })
//     } catch (error) {
//         res.status(500).send({ error: error.message })
//     }
// }