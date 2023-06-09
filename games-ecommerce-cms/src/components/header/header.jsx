import { useContext } from "react"
import "./header.css"
import { cartContext } from "../../context/cart-context"
import { useNavigate } from "react-router-dom"

const Header=()=>{
   const {cartData}=useContext(cartContext) 
   
   const navigate=useNavigate()
    return(
        <>
        <nav className="navbar">
            <header>
            <section className="logo">
                <img className="logo-img" src="https://img.freepik.com/free-icon/game-controller_318-799399.jpg?size=626&ext=jpg&ga=GA1.1.360652572.1686292548&semt=ais" alt="" />
            </section>
            <section onClick={()=>{navigate('/cart')}}>
                <span className="length"> {cartData.length}</span>
                <i className="fa fa-shopping-cart">

                </i>
            </section>
         
            <div class="line"></div>
            
            </header>
        </nav>
        </>
    )
}
export default Header