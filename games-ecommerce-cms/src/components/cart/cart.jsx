import { useCallback, useContext, useRef, useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { cartContext } from "../../context/cart-context"
import './cart.css'
import useRazorPay from 'react-razorpay'

const Cart=()=>{
    const {cartData,removeCartData}=useContext(cartContext)
    const [totalPrice, setTotalPrice] = useState(0);
    // const total=useRef()
    const navigate=useNavigate()
    function continueShopping(){
        navigate('/')
    }
  useEffect(() => {
    // Calculate the total price
    let total = 0;
    cartData.forEach((cartItem) => {
      total +=parseInt(cartItem.item.price);
    });
    setTotalPrice(total);
  }, [cartData]);
    const RazorPay=useRazorPay()
    const razorPayDisplay=useCallback(async(total)=>{
           const options={
                key:"rzp_test_GuFK7I2tKrydIo",
                amount:total*100,
                currency:"INR",
                name:"Shree Ram Games",
                description:"Gaming Transaction",
                handler:(res)=>{
                    console.log(res)
                },
                prefill:{
                    name:"",
                    email:"",
                    contact:''
                },
                notes:{
                    address:"Working Address"
                },
                theme:{
                    color:"#3399cc"
                }
           }
           const rzp1 = new RazorPay(options)
           rzp1.open()
    },[RazorPay])
    //  total.current.price=0
    return(
        <>
        <section className="cart-container">
            <section>
        {cartData.map((cartItem)=>{
            return(
                <>
                <article>
                <img className="cart-image" src={cartItem.src} alt="" />
                <article>{cartItem.item.title}</article>
                <article>{cartItem.item.price}</article>
                <button onClick={() => removeCartData(cartItem.item)}>Remove From Cart</button>
                </article>
                </>
            )
        })}
            </section>
            <section className="billing">
               <article> Billing Information</article>
               {cartData.map((cart)=>{
                   return(
                    <article>
                        <span>{cart.item.title}</span>
                        <span> : </span>
                        <span>{cart.item.price}</span>
                        
                    </article>
                   )
               })}
               <div>Total :{totalPrice}</div>
               <button onClick={()=>{razorPayDisplay(totalPrice)}}>Checkout</button>
               <h2>OR</h2>
               <div><button onClick={continueShopping}>Continue Shopping</button></div>
               
            </section>
        </section>
        </>
    )
}
export default Cart
