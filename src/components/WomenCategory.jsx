import React ,{useContext} from "react";
import { ShopContext } from ".././context/shop-context";
import { PRODUCTS } from "../products";
import "./WomenCategory.css"

const WomenCategory = () => {
  const {addToCart , cartItems}=useContext(ShopContext)
  const womenProducts = PRODUCTS.filter(product => product.category === "women");

  return (
    <div className="products">
      {womenProducts.map(product => (
        
        <div key={product.id}>
          <img src={product.productImage} width="100px" height="200px" alt={product.productName}/>
          <p>{product.productName}</p>
          <p>Category:{product.category}</p>
          <p>${product.price}</p>
          <button className="addToCartBttn" onClick={()=>addToCart(product.id)}>Add to Cart {cartItems[product.id]>0 && <>({cartItems[product.id]})</>}</button>
          </div>
      ))}
    </div>
  );
};

export default WomenCategory;