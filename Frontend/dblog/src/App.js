import Login from './Components/Login';
import Content from './Components/Content';
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import  "./App.css"
import Cab_login from './Components/Cab_Login';
import Cab_register from './Components/Cab_Register';
import Dash from './Components/Dashboard';
// import Content from './Components/Content';



function App() {
  return (
   
    <div className="App">
     
        {/* <Navbar/>  */}
      
      <Routes>
        {/* <Route path='/' element={<Navbar />} /> */}
        {/* <Route path='/' element={<Host_Token />} /> */}
        <Route path='/' element={<Cab_login />} />
        <Route path='/register' element={<Cab_register />} />
        <Route path='/dashboard' element={<Dash />} />
        {/* <Route exact path='/Content' element={<Content />} /> */}
        {/* <Route exact path='/Shops' element={<Shop />} /> */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {/* <Host_Token /> */}
    </div>
    
  );
}

export default App;
