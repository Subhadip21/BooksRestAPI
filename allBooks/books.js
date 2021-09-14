
const express = require('express');
const router = express.Router();
const paper = require('../models/paper');

router.post('/',async(req,res)=>{
    const read = new paper({
        name: req.body.name,
        publisher: req.body.publisher,
        author: req.body.author,
        price: req.body.price
    })
    try{
        const saveRead = await read.save();
        res.json(saveRead);
    }catch(error){
        res.json({message: error})
    }
})

router.get('/', async(req,res)=>{
    try{
        const readable = await paper.find()
        res.json(readable)
    }catch(error){
        res.json({message: error})
    }
})

router.get('/:bookId', async(req,res)=>{
    try{
        const oneBook = await paper.findById(req.params.bookId)
        res.json(oneBook)
    }catch(error){
        res.json({message: error})
    }
})

router.patch('/:bookId', async(req, res)=>{
    try{
        const updatedBook = await paper.updateOne(
            {_id: req.params.bookId},
            {$set: {name: req.body.name},
            $set: {publisher: req.body.publisher},
            $set: {author: req.body.author},
            $set: {price: req.body.price}})
        res.json(updatedBook)
    } catch(error){
        res.json({message: error})
    }
})

router.delete('/:bookId', async(req, res)=>{
    try{
        const removeBook = await paper.remove({_id: req.params.bookId})
        res.json(removeBook)
    }catch(error){
        res.json({message: error})
    }
})

module.exports = router;