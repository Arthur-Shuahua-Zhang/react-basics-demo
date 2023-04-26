import React from 'react';

export default class MyColorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "red"
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol};
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({favoritecolor: "yellow"});
    //     }, 2000)
    // }

    shouldComponentUpdate() {
        return true;
    }

    changeColor = () => {
        this.setState({ favoritecolor: "Black" })
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <button onClick={this.changeColor}>change color to black</button>
            </div>
        )
    }
}