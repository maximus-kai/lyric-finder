import React from 'react';
import index from './components/layouts/Index'
import './App.css';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import {Provider} from './context';
import Lyrics from './components/tracks/Lyrics';


function App() {
  
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={index}/>
              <Route exact path="/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;