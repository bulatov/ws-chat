import React from 'react';
import MessageSubmit from '../MessageSubmit';
import ChatMessages from '../ChatMessages';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.socket = new WebSocket('ws://localhost:8001');
        this.socket.onmessage = function(event) {
            var messages = this.state.messages.slice();
            messages.push(event.data);
            this.setState({
                messages: messages
            });
        }.bind(this);
    }

    render() {
        return (
            <div>
                <MessageSubmit socket={this.socket}/>
                <ChatMessages messages={this.state.messages}/>
            </div>
        );
    }
}
