// Author: Chris Yuen
// App: My Sticky Note App
// Created: April 2022
//

import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateSpace from "./CreateSpace";
import axios from 'axios';

function App() {
  //State for stored array notes
  const [noteArray, setNoteArray] = useState([]);

  //function to retrieve what's previously saved on Mongo
  function retrieveData(){
    fetch("/note")
    .then(res => res.json())
    .then(jsonRes => setNoteArray(jsonRes));
  }

  //Loads fetch function when browser loads
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
    axios.delete('/note/' + objId)
   .then(res => console.log(res.data));

  //Reset Database array
  setNoteArray(prevArray => {
    return prevArray.filter(function(note){
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
        return <Note title={noteItem.title} content={noteItem.content} color={noteItem.color} onDelete={deleteNote} key={index} keyId={index} ObjId={noteItem._id} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
