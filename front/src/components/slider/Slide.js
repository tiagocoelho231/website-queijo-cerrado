import React from 'react';

export default function Slide({ image }){
    const styles ={
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    return (
        <div className="slide" style={styles}></div>
    )

}
