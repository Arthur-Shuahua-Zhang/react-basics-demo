import React from 'react'

class CounterClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initCount
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handleAdd() {
        this.setState({count: this.state.count + 1})
    }

    handleMinus() {
        this.setState({count: this.state.count - 1})
    }


    render() {
        return (
            <div>
                <h1>Counter based on Class Component</h1>
                <p>count: {this.state.count}</p>
                <button onClick={this.handleAdd}> + </button>
                <button onClick={this.handleMinus}> - </button>
            </div>
        )
    }
}

export default CounterClassComponent;