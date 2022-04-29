const Assignment =require('../model/assignment')
const UserAssignment = require('../model/userassignment')
const ClassList=require('../model/ClassList')
exports.Add_assignment=async function(req,res){
    try {
    const assignment=new Assignment({
        ...req.body,    
        duedate:new Date(req.body.duedate),
        file:req.files
    })
        await assignment.save()
        const users =await ClassList.find({class:assignment.classsub})
        users.forEach(user => {
            const userassignment=new UserAssignment({
                owner:user.user,
                assignment:assignment._id
            })
            userassignment.save()
        });
          res.status(201).send({assignment})        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
exports.get_assignment= async function(req, res){
    const assignment=Assignment.find({classsub:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).sort({duedate:1})
}
exports.get_class= async function(req, res){
    const assignment=Assignment.find({_id:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data[0].classsub)
    })
}
exports.get_AllAssignment= async function(req, res){
    const assignment=Assignment.find({},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).sort({duedate:1})
}
exports.get_specific_assignment= async function(req, res){
    const assignment=Assignment.find({_id:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("owner","name")
}
exports.get_alluser_assignment= async function(req, res){
    const assignment=UserAssignment.find({assignment:req.params.id},(err,data)=>{
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    }).populate("owner","name")
}


