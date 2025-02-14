import { useState } from "react"

export default function Player({initialName,symbol,isActive}){
    const[playerName,setPlayerName]=useState(initialName)
    const[isEditing,setIsEditing]=useState(false);
    function handleEdit(){
        setIsEditing((editing)=>!editing)
    }
    function handleSavedValue(event){
        setPlayerName(event.target.value)
    }
    let editName;
    if(isEditing){
        editName= (<input type="text" required onChange={handleSavedValue} value={playerName}></input>)
    }else{
        editName = (<span className="player-name">{playerName}</span>)
    }
    return(
          <li className={isActive?'active':undefined}>
            <span className="player">
            {editName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing?'Save':'Edit'}</button>
          </li>
    )
}