const req = require("express/lib/request");
const users = require("../model/user");

// #get all users
exports.get_allUsers=async function (req, res) {
  const Users = users.find({}, function (err, data) {
    if (err) res.status(400).send({ error: err.message });
    res.status(200).send(data);
  });
};

// #Get user by token
exports.get_users = async function (req, res) {
  const Users = users.find({}, function (err, data) {
    if (err) res.status(400).send({ error: err.message });
    res.status(200).send(data);
  });
};

// #Add user
exports.set_user = async (req,res) => {
  var query = {name:req.body.name,email:req.body.email},
    update = {token:req.body.token},
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

  // #Find the document
  const user=users.findOneAndUpdate(query, update, options, function (error, result) {
    if (error) return;
    const user = result
    const token = user.genrateAuthToken();
    res.send({ user, token });
  });
};

// #Get specific user detail
exports.get_user = async(req,res)=>{
    const Users = users.findOne({_id:req.params.id}, function (err, data) {
        if (err) res.status(400).send({ error: err.message });
        res.status(200).send(data);
      });
}