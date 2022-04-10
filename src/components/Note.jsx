import React from "react";

function Note(props) {

  //Handle the click on delete button. onDelete = passed over from App
  function handleClick(event){
    props.onDelete(
      {keyId: props.keyId,
        objId: event.target.value}); 
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
