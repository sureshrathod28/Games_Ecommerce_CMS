import { useContext } from "react"
import { cartContext } from "../../context/cart-context"
import "./item.css"
const Item=({item,src})=>{
    const{addToCartData}=useContext(cartContext)
    return(
        <>
        <section className="card">
            <img className="card-image" src={src} alt="game-image" />
            <article className="card-title">{item.title}</article>
            <article className="card-description">{item.description}</article>
            <section className="card-footer">
                <article className="price">Rs.{item.price}</article>
                <button className="cart-button" onClick={()=>{addToCartData(item,src)}}>Add to Cart</button>
            </section>
        </section>
     </>
    )
}
export default Item