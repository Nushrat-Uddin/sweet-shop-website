import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart =(product) =>{
       const newCart = [...cart,product];
       setCart(newCart);
       
    }
    return (
        <div className='shop-container'>
           <div className="product-container">
               {
                   products.map(product=><Product
                    key={product.itemcode} 
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
               }
           </div>
           <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;