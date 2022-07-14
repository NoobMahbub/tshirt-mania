import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house,ornament}) => {
    return (
        <div>
            <h2>Hello from Father</h2>
            <p>house:{house}</p>
            <div style={{display:'flex'}}>
            <MySelf house={house} ornament={ornament}></MySelf>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;