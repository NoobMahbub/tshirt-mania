import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css';
const Cart = ({cart, handleRemoveFromCart}) => {
    //conditional rendering options
    //1. element variable
    //2.ternary operator
    //3. && operator(shorthand)
    //4. || operator

// VIDEO 54-5 
    let command;
    if(cart.length === 0){
        command = <h2>Please Add some items</h2>
    }
    else if(cart.length === 1){
        command = <h2>You have 1 item in your cart</h2>
    }
    else{
        command = <p>Thanks for adding item</p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
           {
           cart.map(TShirt=> <p>{TShirt.name}
           <button onClick={()=>handleRemoveFromCart(TShirt)}>X</button>
           </p> )
           }
           {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}
           {cart.length === 3 && <div className='orange'>
            <h3>Trigonal</h3>
            <p>Tin jon ke ki gift diba</p>
            </div>
            }
           {command}
           {
            cart.length !==4 ? <p>Keep adding</p> : <button>Remove All</button>
           }
           {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;