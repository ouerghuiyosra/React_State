import React,{component} from 'react'
import '../App.css';

class Person extends React.Component {

    constructor(props){
      super(props);
    
      this.state = { 
        count:0,
        fullName: "Yosra Ouerghui",
      bio: "New graduate | Master's degree in Information systems",
      imgSrc: "./me.jpg",
      profession: "GoMyCode Student" ,
       show: false};

    }
    componentDidMount() {
    
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          count:prevState.count +1
        }))
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    handleShowPerson = () => {
      this.setState({
        show: !this.state.show
      });
    };
  
    render() {
      return (
        <>
        <h1>Current count :{this.state.count}</h1>

          {this.state.show && (
            <>
              <h1>{this.state.fullName}</h1>
              <h1>{this.state.bio}</h1>
              <img src={this.state.imgSrc} alt="me"></img>
              <h1>{this.state.profession}</h1>
              <br></br>
            </>
          )}
  
          <button onClick={this.handleShowPerson}>click here</button>
        </>
      );
    }
  }

  export default Person;