import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Matchinfo.css"

const MatchInfo=(props)=> {
    
    const{points,setPoints}=props;
    return (
        <div className='informations'>
            <div className='container'>
                <h2 className='head'>Match Informations</h2>
                <div className='inputs'>
                    <input type='text' placeholder='Enter player 1/Team 1 Name' className='input' onChange={(e) => props.setPlayer1(e.target.value)}/>
                    <input type='text' placeholder='Enter player 2/Team 2 Name' className='input'  onChange={(e)=> props.setPlayer2(e.target.value)}/>
                    <input type='number' placeholder='Enter Winning Point' defaultValue={points} className='input' onChange={(e)=>{ props.setPrev(e.target.value);setPoints(e.target.value)}}/>
                 </div>
                <Link to="/match" >
                    <button className='start'>start</button>
                </Link>
            </div>
        </div>
    );
}

export default MatchInfo;