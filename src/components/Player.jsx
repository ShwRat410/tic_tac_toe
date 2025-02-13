import { useState } from "react"

export default function Player({name,symbol}){
    const[isEditing,setIsEditing]=useState(false);
    function handleEdit(){
        setIsEditing((editing)=>!editing)
    }
    let editName;
    if(isEditing){
        editName= (<input type="text" required value={name}></input>)
    }else{
        editName = (<span className="player-name">{name}</span>)
    }
    return(
          <li>
            <span className="player">
            {editName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing?'Save':'Edit'}</button>
          </li>
    )
}