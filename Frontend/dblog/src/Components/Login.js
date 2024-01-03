import {useState } from 'react'
import Navbar from './Navbar'
const Login = () => {

  const[ISpending,setIspending]=useState(false)

    
    return ( 
        <>
        <Navbar />
        <div className='container mt-5 pb-3 '>
            <div className="row  justify-content-center ">
                {/* <div className="col-8 border border-1"> */}
                 {/* <div className="border border-1"> */}

                
                
                <div className="col-4 text-start border border-1 rounded-start-5 shadow-lg">
                <h5 className="text-center border-bottom mt-2 pb-3 rounded-pill shadow-sm">LOGIN</h5>
                
                <label for="inputPassword5" className="form-label mt-5 ">UserName</label>
                <input className="form-control rounded-pill " type="text" aria-label="default input example" />
                

                <label for="inputPassword5" className="form-label">Password</label>
                <input className="form-control rounded-pill mb-2" type="possword" aria-label="default input example" />
                <br></br>
                <button className="btn btn-warning rounded-pill">Login</button>

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
                ISpending ? <button className="btn btn-info rounded-pill mb-3">Register</button> : 
                <button className="btn btn-info rounded-pill mb-3 disabled">Register</button>}
                
                {/* <button className="btn btn-info rounded-pill mb-3 disabled">Register</button> */}

                </div>
                
                {/* </div> */}
                {/* </div>  */}

            </div>
                

            {/* <div class="row">
  <div class="col-sm-6 mb-1 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div> */}



        </div>

        
        </>

        

     );
}
 
export default Login;