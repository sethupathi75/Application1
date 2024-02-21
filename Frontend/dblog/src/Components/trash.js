<div className='container-fluid'>
            <div className='row justify-content-end mt-3'>
              {/* {Loading && <h4 className='text-center text-primary'>loading...</h4> } */}
                {records && <div className='col-4 text-center'>

                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                 {Loading? <div className='text-center '>
                <div className="spinner-border spin " role="status">
                <span className="visually-hidden">Loading...</span>
                </div> </div> : 
                <tbody className='table'>
                    {
                      records.map(record=>
                      ((record.ERR_code==0)?
                        <tr>
                      <td colSpan='2'>{record.ERR}</td>
                      
                    </tr>
          :
                  <tr>
                    <td >{record.P_Name}</td>
                    <td >{record.P_Price}</td>
                  </tr>
                    )

                    )
                  }
                  </tbody>}
                </table>
                </div>}

            </div>
          </div>





{/* <ul class="list-group">
                {allData? 
               <div>
                {
                  allData. map(data=>(
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    {data.P_Name}
                    <p>{data.P_Act_Price}</p>
                    <p>{data.P_Dis_Price}</p>
                    <button className='btn btn-success'  onClick={()=>edit(data.pk)}>EDIT</button>
                    <button className='btn btn-danger' data-bs-target="#staticBackdropdelete" data-bs-toggle="modal" onClick={()=>setDelete(data.pk)} >DELETE</button>
                  </li>)
                  )
                }</div>:<div className="spinner-border justify-content-center  spin " role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
               }
                  
                </ul> */}




                {/* <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" >
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Create Items</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <form onSubmit={create}>
                <strong><label for="inputPassword5" className="form-label mt-3 " >Product Name:</label></strong>
                      <input className="form-control  rounded-pill "  placeholder='Product_Name' onChange={onType} type="text" Value={edits.P_Name}    />

                      <strong><label for="inputPassword5" className="form-label mt-3 " >Product Actual Price:</label></strong>
                      <input className="form-control rounded-pill "  placeholder='Product_Actual_Price' onChange={onType} type="text" Value={edits.P_Act_Price} />

                      <strong><label for="inputPassword5" className="form-label mt-3 " >Product discounted Price:</label></strong>
                      <input className="form-control rounded-pill "  placeholder='Product_discounted_Price' onChange={onType} type="text" Value={edits.P_Dis_Price} />

                        <input type="submit" className="btn btn-success m-3 rounded-pill" data-bs-dismiss="offcanvas" aria-label="Close" value="create"/>
                        </form>
  </div>
</div> */}