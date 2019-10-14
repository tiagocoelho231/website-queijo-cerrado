import React from 'react';

export default function RightArrow(props) {
    return (
        <div className="right circle" onClick={props.nextSlide}>
            <i className="right-arrow"></i>
        </div>
    )
}