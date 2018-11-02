import React from 'react'; 
import Carousel from './Carousel.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      companies: [],
    }
  }

  // moveLeft(){
  //   this.setState({
  //     companies: this.state.companies === this.state.right ? this.state.center : this.state.left 
  //   })
  // }

  // moveRight(){
  //   this.setState({
  //     companies: this.state.companies === this.state.left ? this.state.center : this.state.right
  //   })
  // }


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
       <h2>People Also Bought</h2>
          <Carousel companies={this.state.companies} />
     </div>
    )
  }
}


export default App; 