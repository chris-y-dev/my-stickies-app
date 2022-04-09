const { response } = require('express');
const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Note = require('../models/models');

router.post('/', (req, res) => {
    const newNote = new Note ({
        title: req.body.title,
        content: req.body.content,
        color: req.body.color
    })
    newNote.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

router.get('/', (req, res) => {
    Note.find((err, note) => {
        if (err) {
            console.log(err);
        } else {
            res.json(note)
        }
    })
})

// router.post('/delete', (req,res)=>{
//     console.log(req.body.id);
//     const id = req.body.id
//     Note.findByIdAndDelete(id, function(err){
//         if(err){
//             console.log(err);
//         } else {
//             console.log(`deleted item with id ${id}`);
//         }
//     })
// })

router.delete('/:id', (req,res)=>{
    Note.findByIdAndDelete(req.params.id)
    .then(notesarray => res.json('item deleted'))
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router;