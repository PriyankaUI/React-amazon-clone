import React from 'react'
import './Checkout.css'
import {useStateValue} from './StateProvider';

function Checkoutproduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();
    console.log(id,title,image,price,rating)

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            item:{
                id:id,
            }
        })
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_img" src={image} alt="" />
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p className="checkoutproduct_price">
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
               {
                   Array(rating).fill().map((_)=>(<p>*</p>))
               }
           </div>
           <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default Checkoutproduct
