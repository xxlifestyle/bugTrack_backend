import express from 'express'
import mongoose from 'mongoose'
import Errors from "./models/Errors.js";
import router from "./router/router.js";
import {DB_URL} from "./data/data.js";

const PORT = 3000


const app = express()
app.use(express.json())
app.use('/api', router)

app.get('/errors' ,async (req,res)=>{
    const list = await Errors.find()
    res.json(list)
})
app.get('/user' , (req,res)=>{
    res.json({user:'Vladislav'})
})
async function startServer() {
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=>{console.log('Server started PORT:' + PORT)})
    } catch (e) {
        console.error(e)
    }
}
startServer()