import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
    return (
        <>
        <div className='homehead'>
            <h2 className='selectgametype'>Select Game Type</h2>
        </div>
        <div className='home'>
           <div className='homebox'>
                <Link className="link" to="/matchinfo">
                    <h3 className='selectgame'>
                        Single Game
                    </h3>
                </Link>
                <Link className="link" to="/tournament">
                    <h3 className='selectgame'>
                        Tournament
                    </h3>
                </Link>
            </div>
        </div>
        
        </>
    );
}

export default Home;