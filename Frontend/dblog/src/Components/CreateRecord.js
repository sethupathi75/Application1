import axios from "axios";
import {URL} from './URL'
import { useCallback, useEffect, useState } from 'react'

  const CreateRecord=()=>{

    const [edits,setEdit]=useState(false)
    const [Error,setError]=useState()

    const create=(e)=>{
        e.preventDefault()
        // allData.push(edits)
        axios.post(URL+"post",edits)
        .then(res=>{
         setError(res.data)
        //  location.state="true"
        //   e.preventDefault()
        }
          
        
        )
        .catch(err=>console.log(err.message))
      
        
      }


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



    return(
        <>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" >
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Create Items</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <form onSubmit={create}>
      <strong><label for="inputPassword5" className="form-label mt-3 " >Product Name:</label></strong>
      <input className="form-control  rounded-pill "  placeholder='Product_Name'  onChange={onType} type="text" Value={edits.P_Name}   />

      <strong><label for="inputPassword5" className="form-label mt-3 " >Product Actual Price:</label></strong>
      <input className="form-control rounded-pill "  placeholder='Product_Actual_Price' onChange={onType} type="text" Value={edits.P_Act_Price} />

      <strong><label for="inputPassword5" className="form-label mt-3 " >Product discounted Price:</label></strong>
      <input className="form-control rounded-pill "  placeholder='Product_discounted_Price' onChange={onType} type="text" Value={edits.P_Dis_Price} />

      <input type="submit" className="btn btn-success m-3 rounded-pill" data-bs-dismiss="offcanvas" aria-label="Close" value="create"/>
    </form>
  </div>
</div>
</>
    )
}

export default CreateRecord