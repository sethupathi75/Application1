import {  useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



const Dash = (props) => {
    // const[Slogin,setSlogin]=useState(false)
    // const location=useLocation(true)
    const navigate=useNavigate()
    const [Error,setError]=useState()
    const[records,setRecords]=useState()
    const[Loading,setLoading]=useState(false)
    const[Isadmin,setIsadmin]=useState(false)
    const[FetchLoading,setFetchLoading]=useState(true)
    const [edits,setEdit]=useState(false)
    const[ShopDettails,setShopDetails]=useState('')
    const [allData,setAlldata]=useState()
    const [del,setDelete]=useState()
    const form_data=new FormData()
    // console.log(location.state)
    // {{"P_Name":"","P_Act_Price":"","P_Dis_Price":""}

    const edit=(pk,e)=>{
      axios.get(process.env.REACT_APP_URL+"EditCar/id="+pk)
    .then(res=>{
      
      setDelete(pk)
      setEdit(res.data)
      setFetchLoading(false)   
      console.log(edits)   
    })
    .catch(error=>{console.log(error)
      
    }
    
    )
      
    }

 



    const GetData=(search)=>{
      setLoading(true)       
        axios.post(process.env.REACT_APP_URL+"Search/name="+search)
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
      // e.preventDefault()
         axios.put(process.env.REACT_APP_URL+"updateCar/id="+edits['id'],edits)
          .then(res=>{
            
            // window.alert(res.data['MSG'])
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
          delete allData[index]
          // console.log(allData)

        }

      })

        axios.delete(process.env.REACT_APP_URL+"delete/"+pk)
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
      console.log(atob(sessionStorage.getItem('phoneNo')))
      var car_data=edits
      car_data.MoblieNumber=atob(sessionStorage.getItem('phoneNo'))
      axios.post(process.env.REACT_APP_URL+"carRegister",car_data)
      .then(res=>{
       setError(res.data['MSG'])
       console.log(Error)
      //  location.state="true"
        // e.preventDefault()
      }
        
      
      )
      .catch(err=>console.log(err.message))
    
      
    }


    const Shopupload=  (e)=>{
      
      e.preventDefault()
      console.log(ShopDettails);
      if (ShopDettails['Shop_Name']!=null && ShopDettails['Shop_owner']!=null && 
      ShopDettails['Mobile_NO']!=null && ShopDettails['Shop_image']!=null && ShopDettails['Mobile_NO'].length==10 &&
      ShopDettails['Shop_Name']!='' && ShopDettails['Shop_owner']!='' && 
      ShopDettails['Mobile_NO']!='' && ShopDettails['Shop_image']!=''){

      
       axios.post(process.env.REACT_APP_URL+"upload/file",ShopDettails,{headers: {
        'content-type': 'multipart/form-data'
      }}).then(async (res)=>await window.alert(res.data['MSG']))
      .catch (err=>{window.alert('upload failed')
    console.log(err)
    })
    // res.data['MSG']
    }
    else{
      window.alert('Please Enter Something...')
      
    }
    }


    useEffect(()=>{
      setTimeout(() => {
        axios.get(process.env.REACT_APP_URL+"getcarDetails/Mob="+atob(sessionStorage.getItem('phoneNo')))
    .then(res=>{if (res.data.Err_code==0){
      console.log(res.data.Err_code)
      setError(res.data.MSG)
    }
    else{
      setAlldata(res.data)
      console.log(allData)
      // console.log(Error)
      // setLoading(true)
    }
      
      console.log("useeffect ran")
    })
    .catch(error=>{console.log(error.message)
      setError(error.message)
      
    }
    
    )
  }, 1000);
      
    //   axios.get(URL+"get")
    // .then(res=>{
    //   setAlldata(res.data)
    //   console.log(res.data)
    //   console.log("useeffect ran")
    // })
    // .catch(error=>{console.log(error)
      
    // })
    
    
    },[])



    useEffect(
      () => {


        if (atob(sessionStorage.getItem('MSG'))=='1'){
          navigate('/dashboard')
          setIsadmin(true)
        }
        else{                 
        setIsadmin(true)
        navigate('/')
        }
        }
        
      , 
[])

    const onType=(e)=>{
      if (e.target.placeholder==='CarName'){
        
        setEdit({...edits,"CarName":e.target.value})
        
      }
      else if (e.target.placeholder==='DriverName'){
        
        setEdit({...edits,"DriverName":e.target.value})
        
      }
      else if (e.target.placeholder==='RCNo'){
        setEdit({...edits,"RCNo":e.target.value})
      }

      else if (e.target.placeholder==='CarNo'){
        setEdit({...edits,"CarNo":e.target.value})
      }

      else if (e.target.placeholder==='CarRegister'){
        setEdit({...edits,"CarRegister":e.target.value})
      }
      else if(e.target.placeholder==='Shop_image'){
        setShopDetails({...ShopDettails,"Shop_image":e.target.files[0]})
        
      }
      
    }
    
    
    function close(){
      setEdit({"P_Name":"","P_Act_Price":"","P_Dis_Price":"","pk":""})
      setFetchLoading(true)

    }

    

   
    return ( 
      
       <div>
        

        {/* {
          
        Slogin ?
        <div> */}
         <Navbar Fun={GetData} color="#f9d805" log="3" />
         <button className="btn btn-primary mt-3 mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
  Car Details+</button>

  {/* <button className="btn btn-primary mt-3 mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#CreateProducts" aria-controls="offcanvasWithBothOptions">
  Create Products+</button> */}
          <div className='container-fluid'>
            <div className='row auto  mt-3'>

            <div className='col-lg-12 col-sm-12 justify-content-center'>
              
            
                


                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>Car Name</th>
                      <th>DriverName</th>
                      <th>RC Number</th>
                      <th>Car Number</th>
                      <th>Car Register year</th>
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
                      <td colSpan='6'>{record.MSG}</td>
                      
                    </tr>
          :
                  <tr>
                    <td >{record.CarName}</td>
                    <td >{record.DriverName}</td>
                    <td >{record.RCNo}</td>
                    <td >{record.CarNo}</td>
                    <td >{record.CarRegister}</td>
                    {Isadmin?
                    <>
                    <td><button className='btn btn-success' data-bs-target="#staticBackdrop"  data-bs-toggle="modal"  onClick={()=>edit(record.id)}>EDIT</button></td>
                    <td><button className='btn btn-danger' data-bs-target="#staticBackdropdelete" data-bs-toggle="modal" onClick={()=>setDelete(record.id)} >DELETE</button></td>
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
                      <td colSpan='5'>
                      <div className='text-center'>
                  <div className="spinner-border spin " role="status">
                  <span className="visually-hidden">Loading...</span>
                  </div> </div>
                      </td>
                      <td colSpan='5'>{Error}</td>
                     
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
                        

                      
                        <strong><label for="inputPassword5" className="form-label mt-3 " >Car Name</label></strong>
                        <input className="form-control  rounded-pill "  placeholder='CarName' onChange={onType} type="text" Value={edits.CarName}    />

                        <strong><label for="inputPassword5" className="form-label mt-3 " >DriverName</label></strong>
                        <input className="form-control rounded-pill "  placeholder='DriverName' onChange={onType} type="text" Value={edits.DriverName} />

                        <strong><label for="inputPassword5" className="form-label mt-3 " >RC Number</label></strong>
                        <input className="form-control rounded-pill "  placeholder='RCNo' onChange={onType} type="text" Value={edits.RCNo} />

                        <strong><label for="inputPassword5" className="form-label mt-3 " >Car Number</label></strong>
                        <input className="form-control rounded-pill "  placeholder='CarNo' onChange={onType} type="text" Value={edits.CarNo} />

                        <strong><label for="inputPassword5" className="form-label mt-3 " >Car Register year</label></strong>
                        <input className="form-control rounded-pill "  placeholder='CarRegister' onChange={onType} type="text" Value={edits.CarRegister} />
                      
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
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Enter Car Details</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form onSubmit={create}>
      <strong><label for="inputPassword5" className="form-label mt-3 " >Car Name</label></strong>
      <input className="form-control  rounded-pill "  placeholder='CarName' onChange={onType} type="text" Value={edits.CarName}    />

      <strong><label for="inputPassword5" className="form-label mt-3 " >DriverName</label></strong>
      <input className="form-control rounded-pill "  placeholder='DriverName' onChange={onType} type="text" Value={edits.DriverName} />

      <strong><label for="inputPassword5" className="form-label mt-3 " >RC Number</label></strong>
      <input className="form-control rounded-pill "  placeholder='RCNo' onChange={onType} type="text" Value={edits.RCNo} />

      <strong><label for="inputPassword5" className="form-label mt-3 " >Car Number</label></strong>
      <input className="form-control rounded-pill "  placeholder='CarNo' onChange={onType} type="text" Value={edits.CarNo} />

      <strong><label for="inputPassword5" className="form-label mt-3 " >Car Register year</label></strong>
      <input className="form-control rounded-pill "  placeholder='CarRegister' onChange={onType} type="text" Value={edits.CarRegister} />

      <input type="submit" className="btn btn-success m-3 rounded-pill" data-bs-dismiss="offcanvas" aria-label="Close" value="create"/>
    </form>
  </div>
</div>


<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="CreateProducts" >
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Create Products</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form onSubmit={Shopupload}>
      <strong><label for="inputPassword5" className="form-label mt-3 " >Shop Name</label></strong>
      <input className="form-control  rounded-pill "  placeholder='Shop_Name' onChange={onType} type="text" Value={edits.P_Name}    />

      <strong><label for="inputPassword5" className="form-label mt-3 " >Shop Owner</label></strong>
      <input className="form-control rounded-pill "  placeholder='Shop_Owner' onChange={onType} type="text" Value={edits.P_Act_Price} />

      <strong><label for="inputPassword5" className="form-label mt-3 " >Shop Mobile No</label></strong>
      <input className="form-control rounded-pill "  placeholder='Shop_Mobile' onChange={onType} type="text" Value={edits.P_Dis_Price} />

      <strong><label for="inputPassword5"  className="form-label mt-3 " >Shop image</label></strong>
      <input className="form-control rounded-pill "  placeholder='Shop_image' onChange={onType} type= "file" Value={edits.P_Dis_Price} />

      <input type="submit" className="btn btn-success m-3 rounded-pill adjust" data-bs-dismiss="offcanvas" aria-label="Close" value="Submit"/>
    </form>
  </div>
</div>


        </div>
        

     );
}
 
export default Dash;