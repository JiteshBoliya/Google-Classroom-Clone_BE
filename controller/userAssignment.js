const UserAssignment = require('../model/userassignment');
const Assignment = require('../model/assignment')

// #Get Assignment
exports.get_assignment= async function(req, res){   
    const assignment=UserAssignment.find({assignment:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("owner","name")
}   

// #Get all Assignment
exports.get_Allassignment= async function(req, res){   
    const assignment=UserAssignment.find({classsub:req.params.class},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("assignment","classsub")
}

exports.get_AssignmentStatus=async function(req, res){   
    console.log(req.params.id);
    const assignment=UserAssignment.find({assignment:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("owner","name")
}   

// #Get Assignment by status  :: creater
exports.show_assignment_byStatus= async function(req, res){
    const assignment=UserAssignment.find({owner:req.params.id,status:req.body.status},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}   

// #sort Assignment by status  :: creater ::toreview
exports.sort_assignment_byStatus= async function(req, res){
    const assignment=UserAssignment.find({user:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).sort({status:1})
}

// #sort Assignment by duedate  :: user ::todo
exports.sort_assignment_byduedate= async function(req, res){
    const assignment=Assignment.find({user:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).sort({duedate:1})
}

// #Assignment status

// #count Status
exports.Count_assignmentStatus=async function(req, res){
    console.log(req.params);
    const assignment=UserAssignment.where({status:req.params.status,assignment:req.params.assignment}).count((err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send({data})
    })
}


// #Get assignment by id
exports.get_Userassignment= async function(req, res){   
    const assignment=UserAssignment.find({assignment:req.params.id,owner:req.params.name},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        console.log(data);
        console.log("hery");
        res.status(200).send(data)     
    }).populate("owner","name").populate("assignment")
}