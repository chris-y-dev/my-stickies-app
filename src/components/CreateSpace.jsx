import React, {useState} from "react";

function CreateSpace(props) {
  //State of input text
  const [inputText, setInputText] = useState({title:"", content:""});
  

  //1. Function that handles change to input areas
  //store as new object
  function handleChange(event){
  const {value: newValue, name} = event.target;
  setInputText(prevObj => {
    return {...prevObj, [name]: newValue}
  });
  }

  console.log(inputText); //test update


//Function to pass Title/Content values to <app>
function submitNote(event){
  props.onAdd(inputText) //calling onAdd === calling addNote function from App.jsx
  
  //reset Input Space after submitting note
  setInputText({
    title:"",
  content: ""}); 

  //stop form from refreshing
  event.preventDefault();
}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={inputText.title}/>
        <textarea name="content" placeholder="Write a note here!" rows="3" onChange={handleChange} value={inputText.content}/>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateSpace;
