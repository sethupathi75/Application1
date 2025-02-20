import {  useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from "axios";

const Host_Token=()=>{
const [diagnose,setDignose]=useState('')
const[loading,setloading]=useState({"blur":"blur(0px)","pointer":"auto"})
const theray_name=process.env.REACT_APP_CONS.split(",")

// console.log(process.env.REACT_APP_CONS.split(","))
// API integration

const BooKToken = (e)=>{
  // console.log(process.env.REACT_APP_THERAPY)
  setloading({"blur":"blur(2px)","pointer":"None"})
  e.preventDefault()
  console.log(diagnose)
  axios.post(process.env.REACT_APP_URL+"SlotBook", diagnose)
        .then(res=>{
          setloading({"blur":"blur(0px)","pointer":"auto"})
            // console.log(res.data) 
        })
        .catch(error=>{console.log(error)
          setloading({"blur":"blur(0px)","pointer":"auto"})
        }

        )

}

const apply =(e)=>{
  if (e.target.placeholder==='Name'){
        
    setDignose({...diagnose,"Name":e.target.value})
    
  }
  else if (e.target.placeholder==='Age'){
        
    setDignose({...diagnose,"Age":e.target.value})
    
  }
  else{
    setDignose({...diagnose,"dignose":e.target.value})
  }
}
// console.log(diagnose)

return(
    <>
    <Navbar color="#05d8f9" navlink="true"/>
    {/* <p>{diagnose}</p> */}
    
    <div className='container' style={{filter:loading.blur,pointerEvents: loading.pointer}}>
    {/* <div className="item">I am centered!</div> */}
    <div class="card card_height2" >
  <div class="card-header text-center bg-info ">Token Apply</div>
  <div class="card-body">
  <form onSubmit={BooKToken}>
                      <strong><label for="inputPassword5" className="form-label " >Name:</label></strong>
                      <input className="form-control  rounded-pill " onChange={apply} placeholder='Name'  type="text"     />

                      <strong><label for="inputPassword5" className="form-label  " >Age:</label></strong>
                      <input className="form-control rounded-pill " onChange={apply} placeholder='Age'  type="text"  />

                      <strong><label for="cars" className="form-label" >Dignosis type:</label></strong>
                    <select onChange={apply} placeholder="select" className= "select">
                      {theray_name.map((name)=>(
                        <option value={name}>{name}</option>

                      ))
                      }
                    </select>
                    <br></br>
                      {/* <input className="form-control  rounded-pill "  placeholder='Dignosis type'  type="text"  /> */}
                      
                     
                      
                        <button type="submit" className="btn align-item-centre btn-info mt-2">Apply</button>
                        
                      
                      </form>
    
    
  </div>
</div>

    </div>
    </>
)
}
export default Host_Token