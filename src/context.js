import React, { Component } from 'react';
import axios from 'axios';
// import {Songs} from './Songs';


const Context = React.createContext();

const reducer = (state , action) =>{
    switch(action.type){
        case 'SEARCH_TRACKS' :
            return {
                ...state,
                track_list:action.payload,
                heading:'Search Results'
            }
        case 'CHANGE_AM' :
            return {
                // ...state,
                // track_list:action.payload,
                heading:'Baba no get DATA , Alaye go buy SUB jare!!!'
            }
        default:
            return state;
    }
}
export class Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            track_list:[],
            heading:'Top Ten Tracks',
            dispatch: action=>{this.setState(state => reducer(state ,action))}
             
        }
    }

    componentDidMount(){
        
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ng&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {this.setState({track_list:res.data.message.body.track_list})})
        .catch(err =>{console.log(err)})
     
    }
 

   



    render() {
        return (
           <Context.Provider value={this.state}>
            {this.props.children}
           </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;