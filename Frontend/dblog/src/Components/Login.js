const Login = () => {

    
    return ( 
        <>
        <div className='container mt-5 '>
            <div className="row  justify-content-center">
                {/* {/* <div className="col-8 border border-1"> */}
                {/* <div className="border border-1"> */}
                
                <div className="col-4 text-start border border-1 rounded-start-4">
                
                <label for="inputPassword5" className="form-label mt-5 ">UserName</label>
                <input className="form-control rounded-pill " type="text" aria-label="default input example" />
                

                <label for="inputPassword5" className="form-label">Password</label>
                <input className="form-control rounded-pill mb-2" type="possword" aria-label="default input example" />

                <button className="btn btn-success align-middle">Login</button>

                </div>

                <div className="col-4 bg-primary rounded-end-4">
                    
                {/* <label for="inputPassword5" className="form-label ">UserName</label>
                <input className="form-control d-inline-flex" type="text" aria-label="default input example" />

                <label for="inputPassword5" className="form-label">Password</label>
                <input className="form-control" type="possword" aria-label="default input example" /> */}

                </div>
                {/* </div> */}
                {/* </div> */} 

            </div>
                

            <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
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
</div>
        </div>

        
        </>

        

     );
}
 
export default Login;