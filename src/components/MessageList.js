import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';

export default class MessageList extends Component {
    
    state= {
        messages:[]
    }
    
    async componentDidMount() {
      await this.fetchMessages()
      
      this.fetchInterval = setInterval(async () => {
        await this.fetchMessages()
      }, 10000)
      
    }
    
    componentWillUnmount() {
      clearInterval(this.fetchInterval);
    }
    
    
  async fetchMessages() {
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
                <span style = {{  fontWeight: 'bold', fontSize: '1.2em', color: 'black' }}>
                  {message.name}:
                </span>
                <br/>
                {message.text}
              </div>
            )}
          </div>
        </div>
    )
  }
}