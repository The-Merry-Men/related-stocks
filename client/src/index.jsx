import React from 'react'; 
import ReactDOM from 'react-dom'; 
import CompanyPage from './components/CompanyPage.jsx'

class App extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
        }
    }
    render() {
        return (<div><CompanyPage /></div>)
    }
}

ReactDOM.render(<App />, document.getElementById('app')); 