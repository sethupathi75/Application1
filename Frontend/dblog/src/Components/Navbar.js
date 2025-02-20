import { useState } from 'react'
// import axios from "axios";
// import { Link } from 'react-router-dom';
import hospital from '../images/hospital.png'
import driver from '../images/driver.jpg'

const Navbar = (props) => {

    const[search,setSearch]=useState()
    const[Log,setLog]=useState(props.log)
    // const[records,setRecords]=useState()
    // const[Loading,setLoading]=useState(false)

    const Search=(e)=>{
            setSearch(e.target.value)
    } 
    // console.log(URL)
    // const GetData=()=>{
    //   setLoading(true)
        
    //     axios.post(URL+"Search/name="+search)
    //     .then(res=>{
    //         setRecords(res.data)
    //         console.log(res.data)
    //         setLoading(false)
    //         // return res.data
    //     })
    //     .catch(error=>{console.log(error)
    //     setRecords([{
    //       "ERR":error.message,
    //       'ERR_code':0
    //     }])
    //     setLoading(false)
    //     }

    //     )
    // }

    const getData=()=>{
      props.Fun(search)
    }
    const logout=()=>{
      sessionStorage.clear()
    }

    const profile=()=>{
      switch (props.log){
        case "1":
          return <a href='/register'>
          <button className='btn btn-success rounded-pill '>
              Register
          </button>
          </a>
        case "2":
          return <a href='/'>
          <button className='btn btn-success rounded-pill me-2'>
                  Login <i class="fa fa-sign-out"></i>
          </button>
        </a>

        case "3":
          return <div>
            <button type="button" className="btn btn-lg rounded-pill btn-danger me-2" >{atob(sessionStorage.getItem('phoneNo'))}</button>
          <a href='/'>
          <button onClick={logout} className='btn btn-success rounded-pill me-2'>
                  Logout <i class="fa fa-sign-out"></i>
          </button>
        </a>
          </div>

      }
    }
    
    return ( 
        <>
        {/* <p>{props.color}</p> */}
          <div className='container-fluid  pt-2  shadow-sm' style={{background:props.color}}>
            <div className='row '>
              <div className='col-4'>
                <nav class="navbar navbar-expand-lg ">
                {props.navlink ?<div>
                  <img src={driver} alt='No image' />
                </div>:
                  <ul className="navbar-nav mb-1 ">
                    
                      <li className="nav-item">
                        <a className="nav-link text-light " aria-current="page" href='/content'>Home</a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link text-light" href='/Shops'>SITE</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href='/content'>LEARN</a>
                      </li> */}
                      
                  </ul>}
                </nav>
              </div>
            
              {/* <div className='col-4'>
                <div className="d-flex p-2">
                  <input className="form-control me-2" type="search" placeholder="Search" onChange={Search} />
                  <button className="btn btn-secondary disabled" onClick={getData}>Search</button>
                </div>
              </div> */}
            
              <div className='col-8 d-flex justify-content-end p-2 '>
                {profile()}             
              </div>
            </div>
          </div>

        



          
        
        </>

        

     );
}
 
export default Navbar;