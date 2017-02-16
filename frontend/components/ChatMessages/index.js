import React from 'react';

export default class ChatMessages extends React.Component {
    render() {
        var messages = this.props.messages;
        var messageElements = [];
        for (var i = 0; i < messages.length; i++) {
            messageElements.push(<p key={i}>{messages[i]}</p>);
        }
        return (
            <div>
                {messageElements}
            </div>
        );
    }
}
