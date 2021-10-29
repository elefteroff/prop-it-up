import React, {Component} from 'react';

class PersonCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            clicked : 0
        }
    }

    clickHandler = () => {
        console.log("I'm Clicked")
        this.setState({
            clicked : this.state.clicked + 1
        })
    }

    render() {
        return(
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName }</h1>
                <p>Age: { this.props.age + this.state.clicked }</p>
                <p>Hair Color: { this.props.haircolor }</p>
                <button onClick={this.clickHandler}>{this.state.clicked} </button>
            </div>
        );
        }
}

export default PersonCard;
