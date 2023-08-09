const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const userModel=require('./models/User')

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/cc');


app.post('/login', (req, res)=>{
    const{email, password}= req.body;
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password===password){
                res.json("SUCCESSFUL")
            }else{
                res.json("password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register', (req,res)=>{
    userModel.create(req.body)
    .then(ccs=>req.json(ccs))
    .catch(err=>res.json(err))
})


app.listen(3001, ()=>{
    console.log('server is running')
})