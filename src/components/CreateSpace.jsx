import React, {useState} from "react";
import axios from 'axios';
const mongoose = require('mongoose')

function CreateSpace(props) {
  //State of input text
  const [inputText, setInputText] = useState({
    title:"", content:"", color:"", _id:""});

  //Function that handles change to input areas & store as new object
  function handleChange(event){
  const {value: newValue, name} = event.target;
  setInputText(prevObj => {
    return {...prevObj, [name]: newValue}
  });
  }

  // console.log(inputText); //test update


//Function to pass Title/Content values to <app>
function submitNote(event){

  //assign mongo objID on add
  const _id = mongoose.Types.ObjectId();
  inputText._id = _id;
  props.onAdd(inputText)

   //submit data to backend
  axios.post('https://stickies-wall-by-chris.herokuapp.com/note', inputText)
  .then(res => console.log(res.data));
  
  //reset Input Space after submitting note. But don't reset color
  setInputText({
    title:"",
    content: "",
    color: inputText.color,
    _id:""
  }); 

  //stop form from refreshing
  event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={inputText.title}/>
        <textarea name="content" placeholder="Write a note here!" rows="3" onChange={handleChange} value={inputText.content}/>
        <select list="notecolor" name="color" onChange={handleChange} >
          <option value="grey">Grey</option>
          <option value="rednote">Red</option>
          <option value="bluenote">Blue</option>
          <option value="yellownote">Yellow</option>
          <option value="greennote">Green</option>
          </select>
          <span hidden="hidden" name="_id"value={inputText._id}></span>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateSpace;
