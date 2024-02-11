import { useCallback, useEffect, useState } from 'react'
import Login from './Login';
import {URL} from './URL'
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const Content = () => {
    const[Slogin,setSlogin]=useState(false)
    const location=useLocation()
    const [Error,setError]=useState()
    const[records,setRecords]=useState()
    const[Loading,setLoading]=useState(false)
    const[name,setName]=useState()
    const[act_price,setActPrice]=useState()
    const[Dis_Price,setDisPrice]=useState()
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

      console.log(del)
    })
    .catch(error=>{console.log(error)
      
    }
    
    )
      
    }





    const GetData=(search)=>{
      setLoading(true)
        // console.log('render')
        axios.post(URL+"Search/name="+search)
        .then(res=>{
            setRecords(res.data)
            // console.log(res.data)
            setLoading(false)
            // return res.data
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

    const UpdateRecord=(e)=>{
      
      console.log(edits)
      axios.put(URL+"put/"+edits['pk'],edits)
      
        .then(res=>{
          setError(res.data)  
          e.preventDefault()
        }
        )
        .catch(error=>{console.log(error)
        }

        )
        
    }


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
      allData.push(edits)
      axios.post(URL+"post",edits)
      .then(res=>{
       setError(res.data)
        e.preventDefault()
      }
        
      
      )
      .catch(err=>console.log(err.message))
    
      
    }



    useEffect(()=>{
      axios.get(URL+"get")
    .then(res=>{
      setAlldata(res.data)
      console.log(res.data)
      console.log("useeffect ran")
    })
    .catch(error=>{console.log(error)
      
    }
    
    )
    },[Error])



    useEffect(()=>{
      if (location.state==null){
        setSlogin(true)
      }
      else{
        // console.log(location)
      setSlogin(location.state.isLogin)
      setError(location.state.msg)
      }
      // console.log(location.state)
      
    },
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

    }

    

   
    return ( 
      
       <div>
        

        {
          
        Slogin ? 
        <div>
         <Navbar Fun={GetData}/>

          <div className='container-fluid'>
            <div className='row auto  mt-3'>

            <div className='col-lg-6 col-sm-12 justify-content-center'>
              
            
                


                <table className='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Discount Price</th>
                      <th>Actual Price</th>
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
                    <td><button className='btn btn-success' data-bs-target="#staticBackdrop" data-bs-toggle="modal"  onClick={()=>edit(record.pk)}>EDIT</button></td>
                    <td><button className='btn btn-danger' data-bs-target="#staticBackdropdelete" data-bs-toggle="modal" onClick={()=>setDelete(record.pk)} >DELETE</button></td>
                  </tr>
                    )

                    )
                  }
                  </tbody>:
                  <div className='text-center '>
                  <div className="spinner-border spin " role="status">
                  <span className="visually-hidden">Loading...</span>
                  </div> </div> }
                </table>
                

                </div>

                <div className='col-lg-6 col-sm-12 text-center'>
                  <form onSubmit={create}>
                <strong><label for="inputPassword5" className="form-label mt-3 " >Product Name:</label></strong>
                      <input className="form-control  rounded-pill "  placeholder='Product_Name' onChange={onType} type="text" Value={edits.P_Name}    />

                      <strong><label for="inputPassword5" className="form-label mt-3 " >Product Actual Price:</label></strong>
                      <input className="form-control rounded-pill "  placeholder='Product_Actual_Price' onChange={onType} type="text" Value={edits.P_Act_Price} />

                      <strong><label for="inputPassword5" className="form-label mt-3 " >Product discounted Price:</label></strong>
                      <input className="form-control rounded-pill "  placeholder='Product_discounted_Price' onChange={onType} type="text" Value={edits.P_Dis_Price} />

                        <input type="submit" className="btn btn-success m-3 rounded-pill" value="create"/>
                        </form>
                        </div>

                        {/* ()=>UpdateRecord(edits["pk"]) */}
                
              {/* {Loading && <h4 className='text-center text-primary'>loading...</h4> } */}
                {records && <div className='col-lg-4 col-sm-12 text-center'>

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


          

        </div> : 
        
        <Login msg={Error} / >
        }
        
{/* <!-- Modal --> */}
                 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Item Edits</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={close}></button>
                      </div>
                      <form onSubmit={UpdateRecord}>
                      <div className="modal-body">
                        

                      
                      <strong><label for="inputPassword5" className="form-label mt-3 " >Product Name:</label></strong>
                      <input className="form-control  rounded-pill "  placeholder='Product_Name' onChange={onType} type="text" Value={edits.P_Name}    />

                      <label for="inputPassword5" className="form-label mt-3 " >Product Actual Price:</label>
                      <input className="form-control rounded-pill "  placeholder='Product_Actual_Price' onChange={onType} type="text" Value={edits.P_Act_Price} />

                      <label for="inputPassword5" className="form-label mt-3 " >Product discounted Price:</label>
                      <input className="form-control rounded-pill "  placeholder='Product_discounted_Price' onChange={onType} type="text" Value={edits.P_Dis_Price} />
                      
                      </div>
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

        </div>
        

     );
}
 
export default Content;