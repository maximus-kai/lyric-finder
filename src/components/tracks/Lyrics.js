import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';

class Lyrics extends Component {
    state = {
        track:{},
        lyrics:{}
    }
    componentDidMount(){
        // once the component mounts the app sends an axios request to the musicmatch api to get the lyrics of a particular song based on the track_id passed into it.
         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            // console.log(res.data.message.body.lyrics.lyrics_body)
            this.setState({lyrics:res.data.message.body.lyrics})
            // another axios request to get the track details based on the track_id passed into the request, this is what is displayed under the lyrics.
            return(
                axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            )
        }
        )
        // once the responce is gotten, the app sets the state of the track to an object which contains the track details including the relese date , artist and stuff.
        .then(res => {
            // console.log(res.data.message.body.track)
            this.setState({track:res.data.message.body.track})
        })
        .catch(err => console.log(err))

    }
// this is the main render function that outputs to the dom. 
    render() {
        const {track , lyrics} = this.state;
       if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0){
           return <Spinner/>
    }else{
            return (
                <React.Fragment>
                <Link to="/" className="btn btn-dark btn-sm mb-4">

                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-square-fill mr-2  mb-" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                </svg>


                    Go Back
                </Link>
                    <div className="card">
                    <h5 className="card-header">
                    {track.track_name} By {' '}
                    <span className="text-secondary">{track.artist_name}</span>
                    <p className='card-text'>
                      {lyrics.lyrics_body}
                    </p>
                    </h5>
                    </div>
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            <strong>Album ID</strong>: {track.album_id}
                        </li>
                
                        <li className="list-group-item">
                                  <strong>Music Genre</strong>: {' '} 
                                    {Object.keys(track.primary_genres.music_genre_list).length === 0? 'none' : track.primary_genres.music_genre_list[0].music_genre.music_genre_name }
                                    {/* {track.primary_genres.music_genre_list[0].music_genre.music_genre_name} */}
                                
                        </li>
                    </ul>
                </React.Fragment>
            )
       }
    }
}

export default Lyrics;
