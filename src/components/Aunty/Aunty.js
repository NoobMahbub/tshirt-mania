import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);

    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    // video 54-9
    return (
        <div>
            <h2>Hello from Aunty</h2>
            <p>house:{house}</p>
            <button onClick={handleHouseIncrease}>Aunty Magic</button>
        </div>
    );
};

export default Aunty;