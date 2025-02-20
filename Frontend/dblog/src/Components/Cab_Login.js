import {  useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import driver from '../images/driver.jpg'

const Cab_login=()=>{
const [Driver,setDriver]=useState('')
const navigate=useNavigate()
const[loading,setloading]=useState({"blur":"blur(0px)","pointer":"auto"})
const theray_name=process.env.REACT_APP_CONS.split(",")

// console.log(process.env.REACT_APP_CONS.split(","))
// API integration

const BooKToken = (e)=>{
  // console.log(process.env.REACT_APP_THERAPY)
  setloading({"blur":"blur(2px)","pointer":"None"})
  e.preventDefault()
  console.log(Driver)
  axios.post(process.env.REACT_APP_URL+"cabLogin", Driver)
        .then(res=>{
          setloading({"blur":"blur(0px)","pointer":"auto"})
            console.log(res.data) 
            sessionStorage.setItem("MSG",btoa(res.data["Err_Code"]))
            console.log(sessionStorage.setItem("phoneNo",btoa(Driver["MoblieNumber"])))
            navigate('/dashboard')
        })
        .catch(error=>{console.log(error)
          setloading({"blur":"blur(0px)","pointer":"auto"})
        }

        )

}

const apply =(e)=>{
  if (e.target.placeholder==='Mobile Number'){
        
    setDriver({...Driver,"MoblieNumber":e.target.value})
    
  }
  else if (e.target.placeholder==='Password'){
        
    setDriver({...Driver,"Password":e.target.value})
    
  }
//   else{
//     setDignose({...diagnose,"dignose":e.target.value})
//   }
}
// console.log(diagnose)

return(
    <>
    <Navbar color="#05d8f9" navlink="true" log="1" />
    {/* <p>{diagnose}</p> */}
    
    <div className='container' style={{filter:loading.blur,pointerEvents: loading.pointer}}>
    {/* <div className="item">I am centered!</div> */}
    <div class="card card_height2" >
  <div class="card-header text-center bg-info ">Driver Login</div>
  <div class="card-body">
  <form onSubmit={BooKToken}>
                      <strong><label for="inputPassword5" className="form-label " >Mobile Number:</label></strong>
                      <input className="form-control  rounded-pill " onChange={apply} placeholder='Mobile Number'  type="text"     />

                      <strong><label for="inputPassword5" className="form-label  " >Password:</label></strong>
                      <input className="form-control rounded-pill mb-2" onChange={apply} placeholder='Password'  type="password"  />
                        <p>If you don't have account please register <a href='/register'>register</a></p>
                    <br></br>
                      {/* <input className="form-control  rounded-pill "  placeholder='Dignosis type'  type="text"  /> */}
                      
                     
                      
                        <button type="submit" className="btn  btn-info mt-2">Login</button>
                        
                      
                      </form>
    
    
  </div>
</div>

    </div>
    </>
)
}
export default Cab_login