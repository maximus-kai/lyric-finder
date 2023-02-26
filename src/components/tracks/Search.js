import React, { Component } from 'react';
import {Consumer} from '../../context';
import axios from 'axios'

class Search extends Component {
    state ={
        trackTitle:''
    }
    logit = (e) =>{
        this.setState({trackTitle:e.target.value})  
    }
    findTrack = (dispatch ,e) =>{
//   document.documentElement.requestFullscreen();

         e.preventDefault()
         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page=1&page_size=10&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res => {

                        dispatch({
                            type: 'SEARCH_TRACKS',
                            payload:res.data.message.body.track_list
                        })

            })
        .catch(err =>{console.log(err)})
    }
    render() {
        return (
           <Consumer>
               {value => {
                   const {dispatch}=value;
                
                   return (
                      <div className="card card-body mb-4 p-4">
                          <h1 className="display-4 text-center">

                          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-music-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.572 2.572 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377.5 0 .974-.134 1.338-.377.36-.24.662-.628.662-1.123V8.89l2-.5V6.64z"/>
                        </svg>

                              Search For A Song
                          </h1>
                          <p className="lead text-center">Get the lyrics for your favorite Songs</p>
                          <form>
                              <div className="form-group">
                                  <input 
                                  type="text" 
                                  className="form-control form-control-lg mb-2"
                                  placeholder="Song title here..."
                                  name="trackTitle"
                                  value={this.state.trackTitle}
                                  onChange={this.logit}
                                  ></input>
                                  <button className="btn btn-primary btn-lg btn-block mb-5 " 
                                  type="submit"
                                  onClick={this.findTrack.bind(this ,dispatch)}>
                                  
                                    Get Track Lyrics
                                  </button>
                              </div>
                          </form>
                      </div>
                       )
               }}
           </Consumer>
        )
    }
}

export default Search;
