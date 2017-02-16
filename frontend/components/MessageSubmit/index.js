import React from 'react';

export default class MessageSubmit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        this.props.socket.send(this.state.value);
        this.setState({
            value: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
