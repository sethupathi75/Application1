import axios from "axios"
import { useEffect, useState } from "react"
// import {URL} from './URL'
import Navbar from './Navbar';

const Shop=()=>{
    const[products,setProducts]=useState([])
    const[loading,setloading]=useState(false)

    useEffect(
        ()=>{
            // console.log(process.env.REACT_APP_URL)
            axios.get(process.env.REACT_APP_URL+"download/file")
            .then(res=>{setProducts(res.data)
                console.log(res.data)
                setloading(true)})
            .catch(err=>console.log(err))
            
        }
    ,[])

    return(
        <>
        <Navbar color="#f9d805"/>

        <div className="container ">
            <div className="row my-3 gy-3">
            
            
            {
                loading? 
                    

                  
            products.map(shopdata=>(
                
                <div className="col-md-4 ">
                    <div className="card shadow-lg rounded-5 border-1 card_height1" >
                    <img src={shopdata.Shop_image} className="card-img rounded-top-5 image_size" alt="no image"></img>
                    
                    <div className="card-body">
                        <h5 className="card-title">{shopdata.Shop_Name}</h5>
                        <p className="card-title">OWNER: {shopdata.Shop_owner}</p>
                        <p className="card-title">MOBILE: {shopdata.Mobile_NO}</p>
                        <div className="text-end">
                        <a href = '#' className="btn d-block btn-primary ">Details</a></div>
                    
                    </div>
                    
                </div>
                 
                </div>
            ))
        

                 : 

                <div>
                   <div className='text-center'>
                  <div className="spinner-border spin " role="status">
                  <span className="visually-hidden">Loading...</span>
                  </div> </div>
                </div>
            }
                
                
            </div>     
                  

            

        </div>

        
        
        {/* {
            products.map(shopdata=>(
                <div>
                <p>{shopdata.Shop_Name}</p>
        <img src={URL+shopdata.Shop_image} /></div>
            ))
        } */}
        </>
    )
}

export default Shop