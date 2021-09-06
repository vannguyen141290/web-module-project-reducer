import React from 'react';

const CalcButton = (props) => {
    const { value, onClick, size = 4} = props;

    const clickEventHandler = () => {
        onClick(value)
    }

    return(<div className={`col-xs-${size}`}>
        <button type="button" onClick={clickEventHandler} className="btn">{value}</button>
    </div>);
}

export default CalcButton;