import React, { useState } from 'react';
import useTshirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTshirts([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const existingItem = cart.find(item => item.id === selectedItem.id);

        if (!existingItem) {
        
    setCart([...cart, selectedItem]);
    }
    else{
        alert('Item already in cart');
        // 54-4
    }
}
    const handleRemoveFromCart = (selectedItem) => {
        const newCart = cart.filter(item => item.id !== selectedItem.id)
        setCart(newCart);
    }
  

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {tShirts.map(tShirt => <TShirt
                key={tShirt.id}
                tShirt={tShirt}
                handleAddToCart={handleAddToCart}
                ></TShirt>)
                }    
                   

            </div>
            <div className="cart-container">
            <Cart
            handleRemoveFromCart = {handleRemoveFromCart}
            cart = {cart}
            ></Cart>
            </div>
        </div>
    );
};

export default Home;