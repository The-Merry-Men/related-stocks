import React from 'react'; 
import Carousel from './Carousel.jsx'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      companies: []
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
    return <Carousel companies={this.state.companies}/> 
  }
}


export default App; 