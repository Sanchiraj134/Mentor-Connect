import React from 'react';

import './ThreeDCardStack.css';

const ThreeDCardStack = ({mentors}) => {
    return (
        <div classNAme="card-stack">
            {mentors.map((map,index) => (
                <div
                  className="card"
                  style={{ transform: `rotatev(${index * 10}deg) translatez(${index * -20}px)` }}
                  key={mentors.id}
                >
                  <img src={mentors.image} alt={mentors.name} />
                  <h3>{mentors.name}</h3>
                  <p>{mentors.expertise}</p>
                </div>
            ))}
        </div>
    );
};

export default ThreeDCardStack;