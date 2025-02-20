import {  useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Cab_register=()=>{
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
  axios.post(process.env.REACT_APP_URL+"cabRegister", Driver)
        .then(res=>{
          setloading({"blur":"blur(0px)","pointer":"auto"})
            console.log(res.data) 
            navigate('/')
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
  else if (e.target.placeholder==='FirstName'){
        
    setDriver({...Driver,"FirstName":e.target.value})
    
  }
  else if (e.target.placeholder==='LastName'){
        
    setDriver({...Driver,"LastName":e.target.value})
    
  }
  else if (e.target.placeholder==='Email'){
        
    setDriver({...Driver,"Email":e.target.value})
    
  }
  else if (e.target.placeholder==='ConfirmPassword'){
        
    setDriver({...Driver,"Confirm_Pass":e.target.value})
    
  }
//   else{
//     setDignose({...diagnose,"dignose":e.target.value})
//   }
}
// console.log(diagnose)

return(
    <>
    <Navbar color="#05d8f9" navlink="true" log='2'/>
    {/* <p>{diagnose}</p> */}
    
    <div className='container' style={{filter:loading.blur,pointerEvents: loading.pointer}}>
    {/* <div className="item">I am centered!</div> */}
    <div className="card card_height2" >
  <div class="card-header text-center bg-info ">Driver Register</div>
  <div class="card-body">
  <form onSubmit={BooKToken}>
                      <strong><label for="inputPassword5" className="form-label  " >First Name:</label></strong>
                      <input className="form-control rounded-pill " onChange={apply} placeholder='FirstName'  type="text" required />

                      <strong><label for="inputPassword5" className="form-label  " >Last Name:</label></strong>
                      <input className="form-control rounded-pill " onChange={apply} placeholder='LastName'  type="text" required />

                      <strong><label for="inputPassword5" className="form-label " >Mobile Number:</label></strong>
                      <input className="form-control  rounded-pill " onChange={apply} placeholder='Mobile Number'  type="text"   required/>

                      <strong><label for="inputPassword5" className="form-label  " >Password:</label></strong>
                      <input className="form-control rounded-pill " onChange={apply} placeholder='Password'  type="password"  required/>

                      <strong><label for="inputPassword5" className="form-label  " >Email:</label></strong>
                      <input className="form-control rounded-pill " onChange={apply} placeholder='Email'  type="email" required />
                        
                      <strong><label for="inputPassword5" className="form-label  " >Confirm Password:</label></strong>
                      <input className="form-control rounded-pill " onChange={apply} placeholder='ConfirmPassword'  type="password" required />

                    <br></br>
                      {/* <input className="form-control  rounded-pill "  placeholder='Dignosis type'  type="text"  /> */}
                      
                     
                      
                        <button type="submit" className="btn align-item-centre btn-info mt-2">Login</button>
                        
                      
                      </form>
    
    
  </div>
</div>

    </div>
    </>
)
}
export default Cab_register