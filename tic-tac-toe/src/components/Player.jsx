import { useState } from "react";

export default function Player ({ onChangeName, name, symbol, isActive }) {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ editedName, setEditedName ] = useState(name);

    function handleEditClick() {
        setIsEditing(!isEditing);
        if(isEditing){
            onChangeName(symbol, editedName);
        }
    }

    function handleChange(event) {//built in function for input
        setEditedName(event.target.value);
    }

    let playerName = <span className="player-name">{editedName}</span>
    if (isEditing) playerName = <input type="text" required value={editedName} onChange={handleChange}/>
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}