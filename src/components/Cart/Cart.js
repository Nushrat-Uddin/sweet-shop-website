import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart.name)
    const{cart}=props;
    let total=0;
    for(const item of cart){
        total = total + item.price;
     
    }
    
    return (
        <div className='cart-container'>
            <h4>Items Added: {props.cart.length}</h4>
            <h4>Total Cost: ${total}</h4>
            <button className='btn'><i class="fas fa-shopping-bag"></i> Buy Now</button>
                {
    
                    cart.map(product=><div className='info'>
                    <img src={product.img} alt="" />
                    <p className='para'>{product.name}</p>
                    </div>
                    )
                }
        </div>
    );
};

export default Cart;