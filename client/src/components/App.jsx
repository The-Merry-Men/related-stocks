import React from 'react'; 
import Carousel from './Carousel.jsx';
import style from '../styles/app.css';

import LeftArrow from '../components/LeftArrow.jsx';
import RightArrow from '../components/RightArrow.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      companies: [],
      count: 0, 
    }
  }

  moveLeft(){  
    if(this.state.count === 1) { 
      document.querySelector('._16zWWldI44UY5q0wjhM1EW').style.visibility = 'hidden'; 
      document.querySelector('.mtQN7PP0gq3J4UJulSUSq').style.transform = 'translateX(0)'; 
      this.state.count--
    }
    else if(this.state.count === 2) {
      document.querySelector('._3EX-T77cfR8-wwRXZ0Oa5e').style.visibility = 'visible'; 
      document.querySelector('.mtQN7PP0gq3J4UJulSUSq').style.transform = 'translateX(-33.33%)'; 
      this.state.count--
    }
  }

  moveRight(){
    if(this.state.count === 0) {
      document.querySelector('._16zWWldI44UY5q0wjhM1EW').style.visibility = 'visible'; 
      document.querySelector('.mtQN7PP0gq3J4UJulSUSq').style.transform = 'translateX(-33.33%)'; 
      this.state.count++
    } 
    else if(this.state.count===1) {
      document.querySelector('._3EX-T77cfR8-wwRXZ0Oa5e').style.visibility = 'hidden'; 
      document.querySelector('.mtQN7PP0gq3J4UJulSUSq').style.transform = 'translateX(-66.66%)'; 
      this.state.count++
    }
  }

  componentDidMount() {
    // this.handleGetRequest.bind(this);
    var id = 2; 
    fetch(`http://localhost:3000/companies/${id}`)
      .then(res => res.json())
      .then(res => this.setState({
        companies: res
      }))
      .then(() => () => {this.state})
      .catch(err => console.log(err))
  }
  
  // handleGetRequest(id = req.params.id) {
  // }

  render() {
    return (
      <div className={style.app}>
        <LeftArrow moveLeft={this.moveLeft.bind(this)} />
        <Carousel companies={this.state.companies} count={this.state.count}/>
        <RightArrow moveRight={this.moveRight.bind(this)}/>
     </div>
    )
  }
}


export default App; 