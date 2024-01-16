import { useEffect, useState } from 'react'
import Login from './Login';

import axios from "axios";
import { useLocation } from 'react-router-dom';


const Content = () => {
    const[Slogin,setSlogin]=useState(false)
    const location=useLocation()
    const [Error,setError]=useState()
    console.log(location.state)

    useEffect(()=>{
      if (location.state==null){
        setSlogin(false)
      }
      else{
        // console.log(location)
      setSlogin(location.state.isLogin)
      setError(location.state.msg)
      }
      // console.log(location.state)
      
    })

    return ( 
      
       <div>

        {Slogin ? <div>success</div> : <Login msg={Error} / >}
        
        </div>
        

     );
}
 
export default Content;