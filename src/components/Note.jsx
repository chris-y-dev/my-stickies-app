import React from "react";

function Note(props) {

  //Handle the click on delete button
  function handleClick(){
    props.onDelete(props.id) //triggers function passed over from App
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>X</button> 
    </div>
  );
}

export default Note;
