const classsub = require('../model/class')

// #Get class by userid
exports.get_class= async function(req, res){
    const ClassSub=classsub.find({owner:req.params.id},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}

// #get userid by classid
exports.get_userid= async function(req, res){
    const user=classsub.find({_id:req.params.classid},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}

// #Get classDetails
exports.get_classDetail=async function(req, res){
    const ClassSub=classsub.find({_id:req.params.id},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("owner","name")
}

// #Get class by code
exports.get_classCode= async function(req, res){
    const ClassSub=classsub.findOne({code:req.params.code},function(err,data){
        if (err) res.status(400).send({ error: err.message})
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

// #class code genrator
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