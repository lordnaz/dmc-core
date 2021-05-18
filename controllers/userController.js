const User = require('../models/user');


const addUser = (req, res) => {

    let data = req.body

    const user = new User(data)

    User.find({username : data.username}, function (err, results) {
        if (!results.length){
            console.log('user not exists')

            user.save()
                .then((result)=>{
                    res.send(result)
                })
                .catch((err)=>{
                    console.log(err)
                })

        }else{                
            console.log('user exists: ',data.username)
        }
    });

}


const getAllUser = (req, res) => {

    User.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
}


const getUserByID = (req, res) => {
    const id = req.params.id

    User.findById(id)
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
}


module.exports = {
    addUser,
    getAllUser,
    getUserByID
}