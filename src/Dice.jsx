import React from "react";
import "./App.css"
class Dice extends React.Component {
    numbers = ['Dice-1-b.svg.png','Dice-2-b.svg.png','Dice-3-b.svg.png','Dice-4-b.svg.png','Dice-5-b.svg.png','Dice-6-b.svg.png']

    state = {
        // number: this.numbers[this.randomNumber],
        randomNumber:1
    };
    
    randomize = () => { 
        this.numbers.forEach(number => {
            this.setState({randomNumber: Math.floor(Math.random() * 6)})
        })
    }
    
    render() {
        console.log(this.numbers[this.state.randomNumber])


        return (<>
            <button onClick={this.randomize}><img src={require(`./assets/${this.numbers[this.state.randomNumber]}`)} alt="" /></button>
        </>);
    }
}

export default Dice;
