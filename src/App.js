import React,{component} from 'react'
import Person from './component/Person'

import './App.css';


class App extends React.Component {

  
  render(){
    return (
      <div className="App">
      <div className="card">
      <Person />

      </div>
      </div>
      )
  }
 }

export default App;
