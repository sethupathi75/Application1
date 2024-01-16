import { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[search,setSearch]=useState()
    const[records,setRecords]=useState()

    const Search=(e)=>{
            setSearch(e.target.value)
    } 
    
    const GetData=()=>{
        console.log("sethu")
        axios.post("http://127.0.0.1:8000/Search/name="+search)
        .then(res=>{
            setRecords(res.data)
            console.log(res.data)
            // return res.data
        })
        .catch(error=>{console.log(error)
        setRecords([{
          "ERR":error.message,
          'ERR_code':0
        }])
        }

        )
    }
    
    return ( 
        <>
          <div className='container-fluid bg-primary pt-2 shadow-sm'>
            <div className='row'>
              <div className='col-4'>
                <nav class="navbar navbar-expand-lg ">
                  <ul className="navbar-nav mb-1 ">
                      <li className="nav-item">
                        <a className="nav-link text-light " aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" >Disabled</a>
                      </li>
                  </ul>
                </nav>
              </div>
            
              <div className='col-4'>
                <div className="d-flex p-2">
                  <input className="form-control me-2" type="search" placeholder="Search" onChange={Search} />
                  <button className="btn btn-secondary" onClick={GetData}>Search</button>
                </div>
              </div>
            
              <div className='col-4 text-end p-2'>
                <a href='/Login'>
                  <button className='btn btn-success rounded-pill me-2'>
                          Login
                  </button>
                </a>
            {/* <button className='btn btn-info rounded-pill '>
                    Register
            </button> */}
              </div>
            </div>
          </div>


          <div className='container-fluid'>
            <div className='row mt-3'>
                {records && <div className='col-4 text-center'>

                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className=''>
                    {
                      records.map(record=>
                      ((record.ERR_code===0)?
                        <tr>
                      <td colSpan='2'>{record.ERR}</td>
                      
                    </tr>
          :
                  <tr>
                    <td>{record.P_Name}</td>
                    <td>{record.P_Price}</td>
                  </tr>
                    )

                    )
                  }
                  </tbody>
                </table>
                </div>}

            </div>
          </div>
        
        </>

        

     );
}
 
export default Navbar;