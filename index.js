import express from 'express'
import mongoose from 'mongoose'
import Errors from "./models/Errors.js";
import router from "./router/router.js";
import {DB_URL} from "./data/data.js";
import bodyParser from 'body-parser'
import cors from 'cors'
const PORT = 3001


const app = express()
app.use(express.json())
app.use('/api', router)
app.use(cors());
app.use(express.raw({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.raw({ limit: '50mb', extended: true }));

async function startServer() {
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, ()=>{console.log('Server started PORT:' + PORT)})
    } catch (e) {
        console.error(e)
    }
}
startServer()