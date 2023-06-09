import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../header/header"
import Item from "../items/item"
import "./main.css"
const Main=()=>{
   const [oldSchool,setOldSchool]=useState([])
   const [bestSeller,setBestSeller]=useState([])

    useEffect(()=>{
         axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldSchool)=>{
                  setOldSchool(oldSchool.data.data)
                  console.log(oldSchool.data.data)
         }).catch(()=>{

         }).finally(()=>{

         })
         axios.get('http://localhost:1337/api/Best-sellers?populate=*').then((bestSeller)=>{
                  setBestSeller(bestSeller.data.data)
        }).catch(()=>{

        }).finally(()=>{

        })
        
      
    },[])
  
    return(
        <>
        <Header/>
        
        <section>
            
           
            {bestSeller.map((item,key)=>{
              // debugger
        
              return  <Item item={item.attributes} src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}/>
            })}

            
            {oldSchool.map((item,key)=>{
             return <Item item={item.attributes } src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} />
            })}
          
          
        </section>
       
       
        </>
    )
}
export default Main