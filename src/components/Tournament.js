
import React from "react";
import "../styles/Tournament.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Tournament=({teams,handleAdd,onRemove})=>
{
    const[teamname,setTeamname]=useState("");
    const onAdd=()=>{
        if (teamname!=="")
        {
         const newteamname={
             index: teams.length + 1,
             name: teamname,
             wins: 0,
             points: 0,
             diff: 0,
             matches:0,
           }; 
           handleAdd(newteamname);
           setTeamname("");
        }
     };
     
    return(
        <div className="tournament">
            <div className="enterteam">
                <input type="text" placeholder="Enter the team name" className="teaminput" value={teamname} onChange={(e)=>setTeamname(e.target.value)} autoFocus/>
                <button className="addbutton" onClick={onAdd}>Add+</button>
                <Link to= "/matches">
                <button className="startTour">start</button>
                </Link>
            </div>
            <div className="teamlist">
                <h3> Team Names</h3>
                <div className="namelisting" >
                        {
                            teams.map((team)=>
                            (
                                <div className="teamnamelist">
                                    <h3 key={team.index} className="teamname">{team.name}</h3> 
                                    <button className="removebutton1" onClick={()=>onRemove(team.index)}>
                                        Remove
                                    </button> 
                                </div>
                            )
                            )   
                        }
                </div>
            </div>
        </div>

    )
   
}
export default Tournament;