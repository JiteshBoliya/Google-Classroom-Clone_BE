const UserAssignment = require('../model/userassignment');
const Assignment = require('../model/assignment')
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

// #Get Assignment
exports.get_assignment= async function(req, res){   
    const assignment=UserAssignment.find({assignment:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
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