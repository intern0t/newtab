import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

        this.setState({
            date: new Date(),
            today: months[this.state.date.getMonth()].substr(0, 3) + " " +
            this.state.date.getDate() + ", " + 
            days[this.state.date.getDay()].substr(0, 3).toUpperCase()
        });
    };

    render(){
        return (
            <div className="clock">
                <span>{this.state.today}</span>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;