import React from 'react'; 
import Carousel from './Carousel.jsx'


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
      document.querySelector('.leftArrow').style.visibility = 'hidden'; 
      document.querySelector('.related-company-row').style.transform = 'translateX(0)'; 
      this.state.count--
    }
    else if(this.state.count === 2) {
      document.querySelector('.rightArrow').style.visibility = 'visible'; 
      document.querySelector('.related-company-row').style.transform = 'translateX(-33.33%)'; 
      this.state.count--
    }
  }

  moveRight(){
    if(this.state.count === 0) {
      document.querySelector('.leftArrow').style.visibility = 'visible'; 
      document.querySelector('.related-company-row').style.transform = 'translateX(-33.33%)'; 
      this.state.count++
    } 
    else if(this.state.count===1) {
      document.querySelector('.rightArrow').style.visibility = 'hidden'; 
      document.querySelector('.related-company-row').style.transform = 'translateX(-66.3%)'; 
      this.state.count++
    }
  }


  componentDidMount() {
    fetch("http://localhost:3000/companies/:id")
      .then(res => res.json())
      .then(res => this.setState({
        companies: res
      }))
      .then(() => () => {this.state})
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="carousel-container">
       <div className="title">People Also Bought</div>
          <Carousel companies={this.state.companies} moveLeft={this.moveLeft.bind(this)} 
          moveRight={this.moveRight.bind(this)} count={this.state.count}/>
     </div>
    )
  }
}


export default App; 