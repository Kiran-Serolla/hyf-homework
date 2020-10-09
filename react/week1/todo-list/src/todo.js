import React from 'react';


const ToDo = (props) => {
     
    return(
    <div className="list">
             <ul>
            <li>
            {props.description}  --
            {props.deadline}
            </li>
        </ul>
     
          
    </div>)
  
}

export default ToDo;