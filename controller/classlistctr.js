const classlist = require('../model/ClassList');
const UserAssignment = require('../model/userassignment');
const Assignment= require('../model/assignment')

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
    let currentstatus="handed In"
    
    let currenttime=new Date()
    Assignment.find({_id:req.body.assignment},(err,data)=>{
        if(data[0].duedate<currenttime){
            currentstatus="Done late"
        }
        var query = {owner:req.body.owner,assignment:req.body.assignment},
      update = {file:req.files,time:currenttime,status:currentstatus},
      options = { upsert: true, new: true, setDefaultsOnInsert: true };

    // #Find the document
    UserAssignment.findOneAndUpdate(query, update, options, function (error, result) {
      if (error) return;
      res.send({result});
    }); 
    })
}

 // #User Assignment updates
exports.get_UserAssignmentUpdate=async function(req, res){
    UserAssignment.find({owner:req.body.ownerId,assignment:req.body.assignmentId},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}   

