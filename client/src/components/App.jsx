import React from 'react'; 
import Carousel from './Carousel.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      companies: [],
      center: [],
      right: [],
      left: [] 
    }
  }

  moveLeft(){
    this.setState({
      companies: this.state.companies === this.state.right ? this.state.center : this.state.left 
    })
  }

  moveRight(){
    this.setState({
      companies: this.state.companies === this.state.left ? this.state.center : this.state.right
    })
  }


  componentDidMount() {
    fetch("http://localhost:3000/companies/:id")
      .then(res => res.json())
      .then(res => this.setState({
        companies: res.slice(4, 8), 
        center: res.slice(4, 8),
        right: res.slice(8),
        left: res.slice(0, 4)
      }))
      .then(() => () => {this.state})
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="carousel">
          <Carousel companies={this.state.companies} moveLeft={this.moveLeft.bind(this)} moveRight={this.moveRight.bind(this)}
                    center={this.state.center} left={this.state.left} right={this.state.right} />
      </div>
    )
  }
}


export default App; 