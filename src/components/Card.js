import React from 'react';

class Card extends React.Component{
    render(){
        const { value } = this.props;

        return (
            <div className="card" {...this.props}>{value}</div>
        );
    }
}

export default Card;