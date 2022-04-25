const classlist = require('../model/ClassList');
const UserAssignment = require('../model/userassignment');

// #Add user
exports.join_class = async (req,res) => {
    var query = {class:req.body.class,user:req.body.user},
      update = {},
      options = { upsert: true, new: true, setDefaultsOnInsert: true };
  
    // #Find the document
    classlist.findOneAndUpdate(query, update, options, function (error, result) {
      if (error) return;
      res.send({result});
    });
};

// #Get user list
exports.get_userlist= async function(req, res){
    console.log(req.params.id);
    classlist.find({class:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }) .populate("user","name")
}   

// #Get class list
exports.get_classslist= async function(req, res){
    classlist.find({user:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("class")
}   

// #upload assignment
exports.upload_assignment=async function(req,res){
    try {
    const assignment=new UserAssignment({
        ...req.body,
        file:req.files
    })
    await assignment.save()
        res.status(201).send({assignment})        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

