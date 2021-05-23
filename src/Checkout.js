import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css'
import Checkoutproduct from './Checkoutproduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
        <div className="checout_left">
        <img className="chckout_ad" src="image/ad.png" alt="" />
            {basket?.length===0 ?(
                <div>
                    <h2>Your Shoping basket is empty</h2>
                    <p>you have no item s in your basket. to buy one or "add to basket "next to the item</p>
                </div>
            ) : (
                <div>
                <h2 className="checkout_title">Shopping basket</h2>
                {basket?.map((item)=>(
                <Checkoutproduct 
                     id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                  
                />
                   
            ))}
                </div>
            )}
        </div>
            {basket.length>0 && (
                <div className="checkout_right">
         <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
