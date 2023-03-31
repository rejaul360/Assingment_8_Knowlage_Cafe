import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';

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
        <div className='col-md-4'>
            <h1>hello</h1>
        </div>
     </div>
     
    </div>
  );
}

export default App;
