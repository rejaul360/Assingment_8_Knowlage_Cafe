import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import SideCart from './Component/SideCart/SideCart';

function App() {
  const handleWathTime = () => {
    console.log('okk brow namaj aa jao');
  }
  return (
    <div className="App">
     <div>
      <Navbar></Navbar>
     </div>
     <div className='main row'>
        <div className='col-md-8'>
          <Home 
          handleWathTime= {handleWathTime}
          ></Home>
        </div>
        <div className='col-md-4 '>
           <SideCart></SideCart>
        </div>
     </div>
     
    </div>
  );
}

export default App;
