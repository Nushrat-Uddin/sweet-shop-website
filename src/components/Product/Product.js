import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {name,img,quantity,price,itemcode}=props.product;
    return (
        <div className='item'>
            
            <div className='item-info'>
             <img className='image' src={img} alt="" />
             <h4>Name:<span className='name'> {name}</span></h4>
             <p>Quantity: {quantity}</p>
             <p>Price: ${price}</p>
             <p>Itemcode: {itemcode}</p>
             <button 
             onClick={()=>props.handleAddToCart(props.product)}
             className='button'><i class="fas fa-cart-plus"></i>Add To Cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;