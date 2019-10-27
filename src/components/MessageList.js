import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';


export default class MessageList extends Component {
    
    state= {
        messages:[]
    }
    
    async componentDidMount() {
      const api_response = await axios.get(`http://167.71.154.9/messages`)
      const messages = api_response.data
      this.setState({ messages })
    }
    
  render() {
    return(
        <div className= 'box'>
          <div className='container'>
            {this.state.messages.map(message =>
              <div className = "message">
                {message.name}:  {message.text}
              </div>
            )}
          </div>
        </div>
    )
  }
}