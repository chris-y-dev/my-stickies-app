import React from "react";

function Note(props) {

  //Handle the click on delete button
  function handleClick(event){
    props.onDelete(
      {keyId: props.keyId,
        objId: event.target.value}); //triggers function passed over from App
  }

  return (
    <div className="note" id={props.color}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} value={props.ObjId}>X</button> 
    </div>
  )
}

export default Note;
