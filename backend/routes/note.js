const router = require('express').Router();
let Note = require('../models/models');

router.get('/', function(req, res){
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', function(req,res){
    const title = req.body.title;
    const content = req.body.content;
    const color = req.body.color;

//new note object
    const newNote = new Note({
        title,
        content,
        color
    })
//save the note
    newNote.save()
    .then(()=> res.json('Note added'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.post('/', function(req, res){
    Note.findByIdAndDelete(req.body.
        _id)
    .then(()=> res.json('Note deleted.'))
    .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;