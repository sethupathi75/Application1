import { useCallback, useEffect, useState } from 'react'
import Login from './Login';
import {URL} from './URL'
import axios from "axios";
import { useLocation,seNavigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import CreateRecord from './CreateRecord';


const Content = () => {
    const[Slogin,setSlogin]=useState(false)
    const location=useLocation(true)
    const navigate=useNavigate()
    const [Error,setError]=useState()
    const[records,setRecords]=useState()
    const[Loading,setLoading]=useState(false)
    const[Isadmin,setIsadmin]=useState(false)
    const[FetchLoading,setFetchLoading]=useState(true)
    const [edits,setEdit]=useState(false)
    const [allData,setAlldata]=useState()
    const [del,setDelete]=useState()
    // console.log(location.state)
    // {{"P_Name":"","P_Act_Price":"","P_Dis_Price":""}

    const edit=(pk,e)=>{
      axios.get(URL+"Edit/id="+pk)
    .then(res=>{
      console.log(res.data)
      setDelete(pk)
      setEdit(res.data)
      setFetchLoading(false)      
    })
    .catch(error=>{console.log(error)
      
    }
    
    )
      
    }

 



    const GetData=(search)=>{
      setLoading(true)       
        axios.post(URL+"Search/name="+search)
        .then(res=>{
            setRecords(res.data)          
            setLoading(false) 
        })
        .catch(error=>{console.log(error)
        setRecords([{
          "ERR":error.message,
          'ERR_code':0
        }])
        setLoading(false)
        }

        )
    }


// ***************update*****************

    const UpdateRecord=  (e)=>{

         axios.put(URL+"put/"+edits['pk'],edits)
          .then(res=>{
             setError(res.data)
             setFetchLoading(true)
             
          }
          
          )    
}

// const update= async (e)=>{
//    const Urecord= await UpdateRecord()  
//     // setTimeout(() => {
//     //           e.preventDefault()
              
//     //          }, 500);
// }


// **********Delete*******


    const deleted =(pk)=>{
      console.log(allData)
      allData.map((data,index)=>{
        if (data["pk"]===pk){
          delete allData [index]
          // console.log(allData)

        }

      })

        axios.delete(URL+"delete/"+pk)
        .then(res=>{
          setError(res.data)
          // setDelete(true)
          console.log( Error)
          
        })
        .catch(error=>{console.log(error)
          
        }
        
        )
      

    }
    
//*******create*****

    const create=(e)=>{
      // e.preventDefault()
      
      axios.post(URL+"post",edits)
      .then(res=>{
       setError(res.data)
      //  location.state="true"
        // e.preventDefault()
      }
        
      
      )
      .catch(err=>console.log(err.message))
    
      
    }



    useEffect(()=>{
      setTimeout(() => {
        axios.get(URL+"get")
    .then(res=>{
      setAlldata(res.data)
      console.log(res.data)
      // setLoading(true)
      console.log("useeffect ran")
    })
    .catch(error=>{console.log(error)
      
    }
    
    )
  }, 500);
      
    //   axios.get(URL+"get")
    // .then(res=>{
    //   setAlldata(res.data)
    //   console.log(res.data)
    //   console.log("useeffect ran")
    // })
    // .catch(error=>{console.log(error)
      
    // })
    
    
    },[Error])



    useEffect(
      () => {

        if (sessionStorage.getItem('MSG')=='' || sessionStorage.getItem('MSG')==null){
          navigate('/')
        }
        else{                 
        setIsadmin(true)
        }
        }
        
      , 
[])

    const onType=(e)=>{
      if (e.target.placeholder==='Product_Name'){
        
        setEdit({...edits,"P_Name":e.target.value})
        
      }
      else if (e.target.placeholder==='Product_Actual_Price'){
        
        setEdit({...edits,"P_Act_Price":e.target.value})
        // console.log(edits)
      }
      else if (e.target.placeholder==='Product_discounted_Price'){
        setEdit({...edits,"P_Dis_Price":e.target.value})
      }
      // setEdit({"P_Name":"","P_Act_Price":"","P_Dis_Price":"","pk":""})
    }
    // console.log(edits)
    
    function close(){
      setEdit({"P_Name":"","P_Act_Price":"","P_Dis_Price":"","pk":""})
      setFetchLoading(true)

    }

    

   
    return ( 
      
       <div>
        

        {/* {
          
        Slogin ?
        <div> */}
         <Navbar Fun={GetData}/>
         <button className="btn btn-primary mt-3 mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  Create+</button>
          <div className='container-fluid'>
            <div className='row auto  mt-3'>

            <div className='col-lg-12 col-sm-12 justify-content-center'>
              
            
                


                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Discount Price</th>
                      <th>Actual Price</th>
                      <th>Date</th>
                      <th>Edit Action </th>
                      <th>Delete Action </th>
                    </tr>
                  </thead>
                 {allData?
                <tbody className='table'>
                    {
                      allData.map(record=>
                      ((record.ERR_code==0)?
                        <tr>
                      <td colSpan='2'>{record.ERR}</td>
                      
                    </tr>
          :
                  <tr>
                    <td >{record.P_Name}</td>
                    <td >{record.P_Act_Price}</td>
                    <td >{record.P_Dis_Price}</td>
                    <td >{record.C_Date}</td>
                    {Isadmin?
                    <>
                    <td><button className='btn btn-success' data-bs-target="#staticBackdrop"  data-bs-toggle="modal"  onClick={()=>edit(record.pk)}>EDIT</button></td>
                    <td><button className='btn btn-danger' data-bs-target="#staticBackdropdelete" data-bs-toggle="modal" onClick={()=>setDelete(record.pk)} >DELETE</button></td>
                    </>
                    :<>
                      <td><button className='btn btn-outline-success' disabled >EDIT</button></td>
                    <td><button className='btn btn-outline-danger'  disabled >DELETE</button></td>
                      
                      </>
                      }
                    </tr>
                    )

                    )
                  }
                  </tbody>:
                  <tbody>
                    <tr className='bg-light'>
                      <td colSpan='6'>
                      <div className='text-center'>
                  <div className="spinner-border spin " role="status">
                  <span className="visually-hidden">Loading...</span>
                  </div> </div>
                      </td>
                     
                    </tr>
                   
                  </tbody>}
                  
                </table>
                

                </div>

                <div className='col-lg-6 col-sm-12 text-center'>
                  {/* {
                    Loading? <div>complete</div> : <div>loading...</div>
                  } */}
                        </div>

                       
                
              

{/* ******************Search TAB************** */}


                {/* {records && <div className='col-lg-4 col-sm-12 text-center'>

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
                </div>} */}
                

            </div>
          </div>


          

        {/* </div> :
        
        <Login / >
        } */}
        
{/* <!-- Modal --> */}
                 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Item Edits</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                      </div>
                      <form onSubmit={UpdateRecord}>
                      {FetchLoading? <h>Loading...</h>:<div className="modal-body">
                        

                      
                      <strong><label for="inputPassword5" className="form-label mt-3 " >Product Name:</label></strong>
                      <input className="form-control  rounded-pill "  placeholder='Product_Name' onChange={onType} type="text" Value={edits.P_Name}    />

                      <label for="inputPassword5" className="form-label mt-3 " >Product Actual Price:</label>
                      <input className="form-control rounded-pill "  placeholder='Product_Actual_Price' onChange={onType} type="text" Value={edits.P_Act_Price} />

                      <label for="inputPassword5" className="form-label mt-3 " >Product discounted Price:</label>
                      <input className="form-control rounded-pill "  placeholder='Product_discounted_Price' onChange={onType} type="text" Value={edits.P_Dis_Price} />
                      
                      </div>}
                      <div className="modal-footer">
                        {/* <button type="button" className="btn btn-success" data-bs-dismiss="modal"  onClick={create}>Create</button> */}
                        <button type="submit" className="btn btn-warning" data-bs-dismiss="modal" >update</button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>


                {/* Modal2 ------- */}

                <div className="modal fade" id="staticBackdropdelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Item Edits</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      Are you want to delete?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>deleted(del)}>yes</button>
                        
                      </div>
                    </div>
                  </div>
                </div>



   {/* *************canvas***********              */}
{/* <CreateRecord /> */}

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" >
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
</div>



        </div>
        

     );
}
 
export default Content;