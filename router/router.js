import Router from "express";
import Errors from "../models/Errors.js";

const router = new Router()

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