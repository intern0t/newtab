import React from "react";
import Card from "./Card";
import Search from "./Search";
import Temperature from "./Temperature";
import Clock from "./Clock";
import News from "./News";
import QuickLinks from "./QuickLinks";

class CardContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentTime: 0,
            weatherInformation: {
                forecast: "Mostly Sunny",
                temperature: "70°C"
            }
        }
    }

    render(){
        return (
            <div className="card-container">
                {/* First row - Time, Weather & Search */}
                <div className="card-row">
                    <Card value={<Clock />}  style={{ flexGrow: 1 }}/>
                    <Card value={
                        <Temperature 
                        forecast={this.state.weatherInformation.forecast} 
                        temperature={this.state.weatherInformation.temperature} />
                    }  style={{ flexGrow: 3 }}/>
                    <Card value={<Search />} style={{ flexGrow: 1 }}/>
                </div>
                <div className="card-row">
                    <Card value={<News />} style={{ flexGrow: 1 }}/>
                    <Card value={
                        <QuickLinks />
                    } style={{ flexGrow: 1 }}/>
                </div>
            </div>
        )
    }
}

export default CardContainer;