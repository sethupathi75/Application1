import { useState } from 'react'

const Navbar = () => {

    const[add,setAdd]=useState(0)
    const [blogs,setBlog]=useState([
        {'Name':'Sethu','Age':20},
        {'Name':'Raja','Age':30},
        {'Name':'Mani','Age':18}
    ])
    const handleClick =(name,e) =>{
       setAdd(add+10)
       blogs.map((blog)=>{
        if (blog.Name=='Sethu'){
            setBlog[(blog.Age=blog.Age+10)]

        }
        
       })
    }
    return ( 
        <dev>
            <dev>Class</dev>
        <button onClick={(e)=>handleClick('sethu',e)}>click me {add} times</button>
        {blogs.map((blog) => (
            <div>
                <h2>{blog.Name}</h2>
                <p>{blog.Age}</p>

            </div>
    ))}
        </dev>
        

     );
}
 
export default Navbar;