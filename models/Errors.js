import express from "express";
import mongoose from "mongoose";

const Errors = new mongoose.Schema({
    detail: {type:String},
    title: {type:String, required:true},
    route: {type:String}
})

export default mongoose.model('Errors', Errors)