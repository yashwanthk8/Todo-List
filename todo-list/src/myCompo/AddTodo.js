import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title||!desc)
    {
        alert("title or description should not be blanked")
    }
    props.addTodo(title,desc);
  }

  let addtodoStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  let formStyle = {
    display: "inline-block", // Centers the form within the container
    textAlign: "left", // Aligns text and inputs within the form to the left
    width: "50%", // Adjust width of the form
  };

  return (
    <div className="container" style={addtodoStyle}>
      <h3>Add a Todo</h3>

      <form style={formStyle} onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title for todo
          </label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description for todo
          </label>
          <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}className="form-control" id="desc" />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            ADD Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
