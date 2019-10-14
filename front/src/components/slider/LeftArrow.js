import React from 'react';

export default function LeftArrow(props) {
    return (
        <div className="left circle" onClick={props.prevSlide}>
            <i className="left-arrow"></i>
        </div>
    )
}