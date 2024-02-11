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