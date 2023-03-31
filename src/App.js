import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import SideCart from './Component/SideCart/SideCart';

function App() {
  return (
    <div className="App">
     <div>
      <Navbar></Navbar>
     </div>
     <div className='main row'>
        <div className='col-md-8'>
          <Home></Home>
        </div>
        <div className='col-md-4 '>
           <SideCart></SideCart>
        </div>
     </div>
     
    </div>
  );
}

export default App;
