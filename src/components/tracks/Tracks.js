import React from 'react'
import {Consumer} from '../../context'
import Spinner from '../layouts/Spinner'
import Track from './Track' 


const Tracks = () => {
    return (
        <Consumer>
            {value =>{
                const {track_list , heading } = value;
                if(track_list === undefined || track_list.length === 0){
                    return (
                        <div>
                    <h5 className="text-monospace mt-5 font-weight-bold">Nah Naija we Gather dey o , WE sabi as network be Nah...</h5>
                    <Spinner/>
                        </div>
                    
                    )
                }else{
                 return (
            <React.Fragment>
            <h3 className="text-center mb-4">
                {heading}
            </h3>
            <div className="row">
                   
               {
            
                   track_list.map(item =>{
                       return <Track key={item.track.track_id} track={item.track}/>
                   })
               }
            </div>
            </React.Fragment>
                     
                 )
                }
            }}
        </Consumer>
    )
}

export default Tracks;

