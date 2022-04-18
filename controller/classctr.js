const Class = require('../model/class')
const classsub = require('../model/class')

// #Get class by userid
exports.get_class= async function(req, res){
    const ClassSub=classsub.find({owner:req.params.id},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}

// #Get classDetails
exports.get_classDetail=async function(req, res){
    const ClassSub=classsub.find({_id:req.params.id},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}

// #Get class by code
exports.get_classCode= async function(req, res){
    const ClassSub=classsub.find({owner:req.params.code},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}

// #Add class
exports.set_class=async function(req, res){
    const classSub=new classsub({...req.body,code:makeid()})
    try {
        await classSub.save()
        res.status(201).send({classSub})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}

// #update Class
// exports.update_class = async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowUpdates = ['name', 'subject']
//     const isValidOpration = updates.every((update) => allowUpdates.includes(update))
//     if (!isValidOpration) return res.status(401).send({ error: "InValid opration" })
//     try {
//         const classs = await Class.findOne({ _id: req.body.id, owner: req.user._id })
//         if (!classs) return res.status(400).send({ error: "Product not found" })
//         updates.forEach((update) => classs[update] = req.body[update])
//         await classs.save()
//         res.send(classs)
//     } catch (error) {
//         res.status(500).send({ error: error.message })
//     }
// }

// // #delete Class
// exports.delete_class = async (req, res) => {
//     try {
//         const classs = await Class.findByIdAndDelete({ _id: req.body.id, owner: req.user._id })
//         if (!classs) res.status(404).send({ error: error.message })
//         res.status(200).send({ success: "Deleted...." })
//     } catch (error) {
//         res.status(500).send({ error: error.message })
//     }
// }

const makeid=()=>{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
exports.codeG= async(req,res)=>{
      res.send(makeid())
}