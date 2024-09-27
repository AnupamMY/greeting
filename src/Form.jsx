import { useState } from "react";
import "./form.css"
function Form() {
    const [data, setData] = useState({name:""}); // Initialize as an object
    const [print,setPrint] = useState("")
    const [gname,setName] = useState("")
    const [errors,setErrors] = useState({});
    let {name}= data
    const handleClick = (e) => {
      e.preventDefault();
      // You can add logic here if you want to perform an action on click
    setPrint("Hello")
    setName(data.name)
     let validate={}

     if(name==""){
        validate.name="Please Enter the text"
     }
     else if(name.length < 6){
        validate.name ="Plese enter value more than 6"
       
     }
     setErrors(validate)
     setData({name:""})
    };

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value }); // Update state correctly
    };
  
    return (
      <>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter the text"
          name="name"
          value={name || ""}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Enter</button>
        
        
      </div>
      <div className="error">{errors.name && <span>{errors.name}</span>}</div>
      <div className="main">
      {errors.name?"":<span>{print +" "+gname}</span>}
       {/* Correct way to render the input data */}
    </div>
    </>
    );
  }
  
  export default Form;  