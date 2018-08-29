import React from "react";
import CardContainer from "./CardContainer";

class MainContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            background: "https://images.unsplash.com/42/PcLGXNjMTdiFVKTrElCl__DSC2245.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b03be03ea99b5255fc09f81d96325c85&auto=format&fit=crop&w=1650&q=80"
        }
    }

    componentDidMount(){}

    render(){
        return (
            <div 
            className="main-container">
                <CardContainer />
            </div>
        )
    }
};

export default MainContainer;