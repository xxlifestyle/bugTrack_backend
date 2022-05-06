import Router from "express";
import Errors from "../models/Errors.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const router = new Router()

router.use(cors())
router.use(express.raw({limit: '50mb'}));
router.use(express.json({limit: '50mb'}));
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
router.use(bodyParser.raw({ limit: '50mb', extended: true }));
router.post('/errors',async (req,res)=>{
        try {
            const {detail, title, route} = req.body
            const post = await Errors.create({detail, title, route})
            res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    })
router.get('/errors',async (req,res)=>{
    const errors = await Errors.find()
    res.json(errors)
})
router.get('/errors/:id')
router.get('/errors')
export default router