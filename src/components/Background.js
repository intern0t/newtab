import React from "react";

const Background = ({
    cityImage
}) => {
    return ( <
        div className = "city-background"
        style = {
            {
                backgroundImage: `url(${cityImage})`
            }
        }
        />
    )
};

export default Background;