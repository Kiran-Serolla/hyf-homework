import React from 'react';
import ReactDOM from 'react-dom';


const ToDo = (props) => {
     
    return(<div>
    {props.description}  
    {props.deadline}
    
    </div>)
  
}

export default ToDo;