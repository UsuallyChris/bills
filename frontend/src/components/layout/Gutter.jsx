import React, { Component } from 'react';
import axios from 'axios';

class Gutter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    }
    
    this.getBills = this.getBills.bind(this);
  };

  componentDidMount() {
    this.getBills();
  }

  getBills() {
    axios.get('http://localhost:5000/api/bills/')
      .then(res => {
        console.log(res.data);
        this.setState({
          bills: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  
  render() {
    return(
      <div className="gutter">
        <h1>Gutter</h1>
      </div>
    );
  } 
};

export default Gutter;