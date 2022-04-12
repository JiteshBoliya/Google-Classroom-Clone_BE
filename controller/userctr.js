const users = require('../model/user')
exports.get_user= async function(req, res){
    const Users=users.find({},function(err,data){
        if (err) res.status(400).send({ error: err.message })
        res.status(200).send(data)     
    })
}
exports.set_user=async function(req, res){
    const user=new users(req.body)
    try {
        await user.save()
        const token= await user.genrateAuthToken()
        res.status(201).send({user,token})        
    } catch (error) {
        res.status(404).send({error: error.message})
    }
}
// exports.register_user=async function(req, res){
//     const user=new user(req.body)
//     try {
//         await user.save()
//         // const token= await user.genrateAuthToken()
//         res.status(201).send({user})        
//     } catch (error) {
//         res.status(404).send({error: error.message})
//     }
// }
exports.login_user=async (req, res) => {
    try {
              const user =users(req.body)
              console.log(user);
          const token = await user.genrateAuthToken()
          console.log(token);
          res.send({ user , token})
      } catch (e) {
          console.log(e)
        //   res.status(404).send({errMessage :"Your Credential are Wrong !"})
      }
}
  