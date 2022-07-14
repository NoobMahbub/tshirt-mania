import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
/**
 *  context api
 * 1. call createContext() with a default value
 * 2. set a variable to the context with uppercase
 * 3. make sure to export the context to use it in other places
 * 4. Wrap you child content using RingContext.Provider
 * 5. Provide a value
 * 6. to consume the value, use RingContext.Consumer
 * 7. use the value in the child component
 */

export const RingContext = createContext('ring');


const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    // vide 54-8



    return (
        <RingContext.Provider value={[house,setHouse]}>
            <div className='grandpa' >
                <h2>Grandpa</h2>

                <p>house:{house}  <button onClick={handleBuyAHouse}>Buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>

                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;