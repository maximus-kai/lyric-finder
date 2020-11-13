import React from 'react';
import {Link} from 'react-router-dom'

const Track = ({track}) => {
    return (
        <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
        <div className="card-body">
            <h5>{track.artist_name}</h5>
            <p className="card-text">
            <strong>

            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-music-player-fill mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm7 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <circle cx="8" cy="11" r="1"/>
            </svg>

            Track</strong>: {track.track_name}
            <br/>
            <strong>
            
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-collection-play-fill mb-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm5.265-7.924A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"/>
            </svg>
            
            
            Albulm</strong>
            : {track.album_name}
            <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block" >
            {/* <i className="fas fa-chevron-right ">
                View Lyrics
            </i> */}
  View Lyrics
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill ml-3 pt-1 mb-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                </svg>

            </Link>
            </p>
        </div>
        </div>
        </div>
    )
}

export default Track;
