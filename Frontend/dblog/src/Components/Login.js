import {useEffect, useState } from 'react'
// import Navbar from './Navbar'
import {URL} from './URL'
// import Login from './Login';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import raja from '../App';
const Login = () => {


// state
  const[ISpending,setIspending]=useState(true)
  const[LoginRecord,setLoginRecord]=useState({
    "UserName":"",
    "Password":""
  })
 const [FormPending,setFormPending]=useState(true)
 const[error,setError]=useState()


// page navigation
  const navigate=useNavigate()


    
// user function

  const Nextpage=()=>{
    setFormPending(false)
    if(LoginRecord.UserName!='' && LoginRecord.Password!=''){
      axios.post(URL+"Login",LoginRecord)
    .then(res=>{
      if (res.data["Err_Code"]==0){
        setError(res.data["MSG"])
        setFormPending(true)
        
      }
      else{
        // setError(res.data["MSG"])
        sessionStorage.setItem("MSG",res.data["MSG"])
        navigate('/Content', {state:{isLogin:true,Isadmin:true}})
        
      }
      setFormPending(true)
    })
    .catch(error=>{console.log(error)
      setError(error.message)
    setFormPending(true)
    
    }
    
    )

    }
    else{
      setError("Username/Password is Required")
      setFormPending(true)

    }
    


  }

  useEffect(()=>{
    sessionStorage.clear()
  },[])

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
        
      
        <div className='container font mt-5 pb-3 '>
            <div className="row  justify-content-center ">
                <div className="col-4 text-start border border-1 rounded-start-5 shadow-lg">

                <h5 className="text-center  border-bottom mt-2 pb-3 rounded-pill shadow-sm">LOGIN</h5>
                {/* <p className='text-center text-danger font'>{props.msg}</p> */}
                <p className='text-center text-danger font'>{error}</p>
                {/* <form> */}
                <label for="inputPassword5" className="form-label font mt-3 " >UserName</label>
                <input className="form-control mb-3 rounded-pill font" onChange={onType} placeholder='user'  type="mail" aria-label="default input example" />
                

                <label for="inputPassword5" className="form-label font" >Password</label>
                <input className="form-control rounded-pill mb-2 font" onChange={onType}  placeholder='pass' type="possword" aria-label="default input example" />
                <br></br>
                
                <button onClick={Nextpage}  className="btn d-flex btn-warning rounded-pill" >Login
                {FormPending ? <div></div>: 
                <div className=' justify-content-center'>
                <div className="spinner-border spin " role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                </div>}
                
                </button>
                
               
                
                {/* </form> */}
                

                </div>
                



                <div className="col-4 text-start bg-warning rounded-end-5 shadow-lg">
                    
                <h5 className="text-center bg-white border-bottom mt-2 pb-3 rounded-pill  ">REGISTER</h5>
                
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