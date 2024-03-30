import Login from './Components/Login';
import Content from './Components/Content';
import {Routes,Route} from 'react-router-dom'
import NotFound from './Components/NotFound';
import Shop from './Components/Shop';
import  "./App.css"
// import Content from './Components/Content';



function App() {
  return (
   
    <div className="App">
     
        {/* <Navbar/>  */}
      
      <Routes>
        {/* <Route path='/' element={<Navbar />} /> */}
        <Route path='/' element={<Login />} />
        <Route exact path='/Content' element={<Content />} />
        <Route exact path='/Shops' element={<Shop />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      
    </div>
    
  );
}

export default App;
