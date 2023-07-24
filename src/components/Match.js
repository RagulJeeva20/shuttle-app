import React from 'react';
import "../styles/Match.css";
import Swal from 'sweetalert2';
function Match(props)
{
    
    const{player1,player2,points,prevPoints}=props;
    console.log(prevPoints);
    return (
        <>
        <div className='match'>
        <h3 className='matchhead'> IN MATCH</h3>
        <h3 ><span className='winningpt'>Winning point : {points}</span></h3>
        <div className="Outer">
            
            <div className="container1">
                
                    <h2 className='text'>{player1}</h2>
                    <h2 className='text'>{props.point1}</h2>
                    <button className="increment" onClick={()=>{
                        
                        if (props.point1===points-1)
                        {
                            props.setPoint1(props.point1+1);
                            Swal.fire({
                                title: `${props.player1} is the winner!`,
                                icon: 'success',
                              }).then(() => {
                                window.location.reload();
                              });
                            
                        }
                        else{
                            props.setPoint1(props.point1+1);
                        }
                    }}>
                        +
                    </button>
                    <button className="decrement" onClick={()=>
                            {if(props.point1!==0)
                            {
                                props.setPoint1(props.point1-1)
                                if(props.count>0 && (props.point1===points-2 ||props.point2===points-2))
                                {
                                    props.setPoints(+points-1);
                                    props.setCount(props.count-1);
                                }
                            }
                            }
                            
                            
                            
                        }>
                        -
                    </button>
               
            </div>
            <div className="container2">
            
                    <h2 className='text'>{player2}</h2>
                    <h2 className='text'>{props.point2}</h2>
                    <button className="increment" onClick={()=>{
                       
                       if (props.point2===points-1)
                       {
                           props.setPoint2(props.point2+1);
                           Swal.fire({
                            title: `${props.player2} is the winner!`,
                            icon: 'success',
                          }).then(() => {
                            window.location.reload();
                          });
                           
                       }
                       else{
                           props.setPoint2(props.point2+1);
                       }
                   }}>
                        +
                    </button>
                    <button className="decrement" onClick={()=>
                            {if(props.point2!==0)
                            {
                                props.setPoint2(props.point2-1)
                                if(props.count>0 && (props.point1===points-2 ||props.point2===points-2) &&points)
                                {
                                  props.setPoints(+points-1);
                                  props.setCount(props.count-1);
                                }
                            }}
                        }>
                        -
                    </button>
                    
            </div>
            
        </div>
        <div className='reset'>
            <button className='resetbutton' onClick={()=>{props.setPoint1(0);props.setPoint2(0);props.setPoints(prevPoints)}}>
                        Reset
                    </button>
        </div>
           
        </div>
      
        </>
    )
}

export default Match;