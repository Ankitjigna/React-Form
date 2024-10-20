import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event)=>{
    setFormData((currData)=>{
        return {...currData, [event.target.name] : event.target.value};
    });
  };

  let handleDefault = (event)=>{
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h4>Give a Comments!</h4>
      <form onSubmit={handleDefault} >
        <label htmlFor="username">Username</label>
      <input placeholder="username" type="text"  onChange={handleInputChange} value={formData.username} id="username" name="username"/>
      <br></br>
      <br></br>
      <label htmlFor="remarks">Remark</label>
      <textarea placeholder="Remarks" onChange={handleInputChange} value={formData.remarks} id="remarks" name="remarks" >Remarks</textarea>
      <br></br>
      <br></br>
      <label htmlFor="rating">Rating</label>
      <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} id="rating" name="rating" onChange={handleInputChange}/>
      <br></br>
      <br></br>
      <button>Add Comment</button>
      </form>
    </div>
  );
}
