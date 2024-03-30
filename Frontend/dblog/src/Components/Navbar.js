import { useState } from 'react'
// import axios from "axios";
// import { Link } from 'react-router-dom';


const Navbar = (props) => {

    const[search,setSearch]=useState()
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
    
    return ( 
        <>
          <div className='container-fluid  pt-2  bg-warning shadow-sm'>
            <div className='row '>
              <div className='col-4'>
                <nav class="navbar navbar-expand-lg ">
                  <ul className="navbar-nav mb-1 ">
                      <li className="nav-item">
                        <a className="nav-link text-light " aria-current="page" href='/content'>Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href='/Shops'>SITE</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href='/content'>LEARN</a>
                      </li>
                  </ul>
                </nav>
              </div>
            
              <div className='col-4'>
                <div className="d-flex p-2">
                  <input className="form-control me-2" type="search" placeholder="Search" onChange={Search} />
                  <button className="btn btn-secondary disabled" onClick={getData}>Search</button>
                </div>
              </div>
            
              <div className='col-4 text-end p-2'>
                <a href='/'>
                  <button className='btn btn-success rounded-pill me-2'>
                          Logout <i class="fa fa-sign-out"></i>
                  </button>
                </a>
            {/* <button className='btn btn-info rounded-pill '>
                    Register
            </button> */}
              </div>
            </div>
          </div>

        



          
        
        </>

        

     );
}
 
export default Navbar;