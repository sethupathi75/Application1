import {useEffect, useState } from 'react'
import Navbar from './Navbar'
// import Login from './Login';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
const Login = (props) => {


// state
  const[ISpending,setIspending]=useState(false)
  const[LoginRecord,setLoginRecord]=useState({
    "UserName":"",
    "Password":""
  })
 const [FormPending,setFormPending]=useState(true)


// page navigation
  const navigate=useNavigate()


    
// user function

  const Nextpage=()=>{
    setFormPending(false)
    axios.post("http://127.0.0.1:8000/Login",LoginRecord)
    .then(res=>{
      if (res.data["Err_Code"]==0){
        // setError(res.data["MSG"])
        navigate('/Content', {state:{isLogin:false,msg:res.data["MSG"]}})
        setFormPending(true)
      }
      else{
        // setError(res.data["MSG"])
        navigate('/Content', {state:{isLogin:true,msg:res.data["MSG"]}})
      }
      setFormPending(true)
    })
    .catch(error=>{console.log(error)
      // setError(error.message)
    navigate('/Content', {state:{isLogin:false,msg:error.message}})
    setFormPending(true)
    }
    
    )


  }

  // useEffect()

  const onType=(e)=>{
    if (e.target.placeholder==='user'){
      setLoginRecord({...LoginRecord,"UserName":e.target.value})
    }
    else if (e.target.placeholder==='pass'){
      setLoginRecord({...LoginRecord,"Password":e.target.value})
    }
   

  }

    return ( 
        <>
        {/* <Navbar /> */}
        
        <p><strong>{props.msg}</strong></p>
        <div className='container mt-5 pb-3 '>
            <div className="row  justify-content-center ">
                {/* <div className="col-8 border border-1"> */}
                 {/* <div className="border border-1"> */}

                
                
                <div className="col-4 text-start border border-1 rounded-start-5 shadow-lg">
                <h5 className="text-center border-bottom mt-2 pb-3 rounded-pill shadow-sm">LOGIN</h5>
                
                
                <label for="inputPassword5" className="form-label mt-5 " >UserName</label>
                <input className="form-control rounded-pill " onChange={onType} placeholder='user' type="text" aria-label="default input example" />
                

                <label for="inputPassword5" className="form-label" >Password</label>
                <input className="form-control rounded-pill mb-2" onChange={onType} placeholder='pass' type="possword" aria-label="default input example" />
                <br></br>
                <button onClick={Nextpage} className="btn btn-warning rounded-pill">Login</button>

                {FormPending ? <div></div>: 
                <div className='d-flex justify-content-center'>
                <div className="spinner-border text-info " role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                </div>}

                </div>
                



                <div className="col-4 text-start bg-warning rounded-end-5 shadow-lg">
                    
                <h5 className="text-center border-bottom mt-2 pb-3 rounded-pill  ">REGISTER</h5>
                
                <label for="inputPassword5" className="form-label mt-5 ">FirstName</label>
                <input className="form-control rounded-pill " type="text" aria-label="default input example" />
                

                <label for="inputPassword5" className="form-label">LastName</label>
                <input className="form-control rounded-pill mb-2" type="possword" aria-label="default input example" />

                <label for="inputPassword5" className="form-label">Email Addresss</label>
                <input className="form-control rounded-pill mb-2" type="possword" aria-label="default input example" />

                <label for="inputPassword5" className="form-label">Password</label>
                <input className="form-control rounded-pill mb-2" type="possword" aria-label="default input example" />

                <label for="inputPassword5" className="form-label">Confirm Password</label>
                <input className="form-control rounded-pill mb-2" type="possword" aria-label="default input example" />
                <br></br>
                
                {
                ISpending ? <button className="btn btn-light rounded-pill mb-3">Register</button> : 
                <button className="btn btn-light rounded-pill mb-3 disabled">!Register</button>}
                
                {/* <button className="btn btn-info rounded-pill mb-3 disabled">Register</button> */}

                </div>
                
                {/* </div> */}
                {/* </div>  */}

            </div>
                

           



        </div>

        
        </>

        

     );
}
 
export default Login;