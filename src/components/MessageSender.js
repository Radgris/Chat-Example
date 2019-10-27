import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';


export default class MessageSender extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            message: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        
    }
    
  
    handleChange(event)  {
        this.setState({message: event.target.value});
    }
    
    async submitMessage(event) {
        event.preventDefault();
        await axios.post(`http://167.71.154.9/messages`, {
            name:'Anwar',
            text: this.state.message
        })
        
    }
    
    
    render() {
        return (
            <div className = 'box'>
                    <form onSubmit= {this.submitMessage}>
                  
                        <input className= 'textbox' type="text" value={this.state.message} onChange={this.handleChange} name="name" />
                        <input className = 'butt' type="submit" value="Send" />
                        
                    </form>
            </div>
        
        
        );
    }
}
