// Author: Chris Yuen
// App: My Sticky Note App
// Created: April 2022

import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateSpace from "./CreateSpace";

function App() {
    //State for stored array notes
  const [noteArray, setNoteArray] = useState([]);

  //Function to Retrieve Note + Add object into Array of Objects
  function addNote(note){
    setNoteArray(prevArray => {
        return [...prevArray, note]
      })
  }

  //create function to delete note DEPENDING ON ID
  //pass this function to each rendered note as property
  function deleteNote(id){
    setNoteArray(prevArray => {           //Call previous Array and filter according to ID passed over
      return prevArray.filter(function(noteItem, index){
        return index !== id
      })  
  })
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
        return <Note title={noteItem.title} content={noteItem.content} onDelete={deleteNote} key={index} id={index}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
