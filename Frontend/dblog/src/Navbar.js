const Navbar = () => {
    const handleClick =(name,e) =>{
        console.log('hello' + name , e.innerHTML)
    }
    return ( 
        <dev>
            <dev>Class</dev>
        <button onClick={(e)=>handleClick('sethu',e)}>click me</button>
        </dev>
        

     );
}
 
export default Navbar;