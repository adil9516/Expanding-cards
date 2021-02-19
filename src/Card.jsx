import React,{useState}from 'react'
import './App.css'

function Card(props) {
    const [toggleclass,setToggleclass] = useState(false);
    const handleClick=()=>{
        setToggleclass(true)
        
       }
       const revertBack=()=>{setToggleclass(false)}
    return (
        <div style={props.style} className={toggleclass?'card active':'card '} onClick={handleClick} onDoubleClick={revertBack}>
      
        <h2>{props.text}</h2>
            
        </div>
    )
}

export default Card;
