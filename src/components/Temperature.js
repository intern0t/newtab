import React from "react";

const Temperature = ({temperature, forecast}) => {
    return (
        <div className="temperature">
            {temperature}
            <span>{forecast}</span>
        </div>
    );
}

export default Temperature;