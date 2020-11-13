import React from 'react'
import spinner from './spinner.gif'
function Spinner() {
    return (
        <div>
            <img 
                src={spinner}
                alt="loading..."
                style={{width:'200px' , margin:'400px auto', marginTop:'10px' , display:'block'}}

            />
        </div>
    )
}

export default Spinner
