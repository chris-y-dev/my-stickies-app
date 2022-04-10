// Author: Chris Yuen
// App: My Sticky Note App
// Created: April 2022

import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateSpace from "./CreateSpace";
import axios from 'axios';

function App() {
  //State for stored array notes
  const [noteArray, setNoteArray] = useState([]);

  function retrieveData(){
    fetch("http://localhost:4000/note")
    .then(res => res.json())
    .then(jsonRes => setNoteArray(jsonRes));
  }

// changed .then function
  useEffect(retrieveData, []);


  // Function to Retrieve Note + Add object into Array of Objects
  function addNote(note){
    setNoteArray(prevArray => {
        return [...prevArray, note]
      })
  }

  //create function to delete note DEPENDING ON ID
  //pass this function to each rendered note as property
  function deleteNote(ids){

    const {keyId, objId} = ids
    // console.log(id);
    axios.delete(`http://localhost:4000/note/${objId}`)
   .then(res => console.log(res.data));
   //old link http://localhost:4000/

   //for local Array
   setNoteArray(prevArray => {           //Call previous Array and filter according to ID passed over
    return prevArray.filter(function(noteItem, index){
      return index !== keyId
      })  
  });
  //Reset Database array
  setNoteArray(prevArray => {
    return prevArray.filter(function(note){
      // console.log(note._id);
      return note._id !== objId 
    })
  });



  }
  
    /* Pass a function to retrieve 'Note' data from createarea */
    /* Passover the note content, delete function, and ID/Key */
  return (
    <div>
      <Header />
      <CreateSpace 
        onAdd={addNote}
      />
      {noteArray.map(function(noteItem, index){
        return <Note title={noteItem.title} content={noteItem.content} color={noteItem.color} onDelete={deleteNote} key={index} keyId={index} ObjId={noteItem._id}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
