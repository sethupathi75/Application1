import { useEffect, useState } from 'react'
import axios from "axios";

const Content = () => {

    const[ISpending,setIspending]=useState(true)
    const [blogs,setBlog]=useState()

    useEffect(()=>{
        axios.get("https://api-service-6zss.onrender.com/get")
        .then(res=>{
            console.log(res.data)
            return res.data
        })
        
        // .then(data=>{
        //     // setBlog(data)
        //     // setIspending(false)
        //     console.log(data)
        // })
    },[])
    
    // console.log('sethu')
    // const handleClick =(name,e) =>{
    //    setAdd(add+10)
    //    blogs.map((blog)=>{
    //     if (blog.Name=='Raja'){
    //         setBlog[(blog.Age=blog.Age+10)]

    //     }
        
    //    })
    // }
    return ( 
       <div>
        {ISpending && <div>Loading....</div>}
        {blogs && <div>
            {/* <dev>Class</dev>
        <button onClick={(e)=>handleClick('sethu',e)}>click me {add} times</button> */}
        {blogs.map(blog => (
            <div>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>

            </div>
    ))}
        </div>}
        </div>
        

     );
}
 
export default Content;