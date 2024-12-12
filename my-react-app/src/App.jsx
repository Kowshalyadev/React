// import logo from './logo.svg';
import './App.css';
import Table from'./createTable';
import Contactus from './potfolio/contactus';
import Aboutus from './potfolio/Aboutus';
import Home from './potfolio/home';
import Calculator from './calculator/calculattors/calculatorss';
import Addcard from './conditinalRend/samplefrom/importaddcard';
import CartAddo from './forms/form/carto';
import UpdatingPhase from './mountingstate/updatingphase';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

function APP() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // // <Profilecard/>
    // <Router>
    //   <nav style={{display:"flex",justifyContent:"space-between"}}>
    //   <Link to="/homes">home</Link>
    //   <Link to="/contact">contact</Link>
    //   </nav>
    //   <Routes>
    //     <Route path='/homes' element={<Table/>}/>
    //     <Route path='/contact' element={<Contactus/>}/>
    //   </Routes>
    // </Router>
    <Router>
      <div style={{backgroundColor:"lawngreen",padding:"20px",margin:"auto",display:"flex",justifyContent:"space-evenly"}}> 
        <Link className="links" to="/home">HOME</Link>
        <Link className="links" to="/aboutus">ABOUTUS</Link>
        <Link className="links" to="/contact">ContactUs</Link>
        <Link className='links' to="/tableTask">Table Task</Link>
        <Link className='links' to="/calculator">Calculator Task</Link>
        <Link className='links' to="/addcount">Add Count</Link>
        <Link className='links' to="/incDecr">Addcart Task</Link>
        <Link className='links' to="/counter">Counter</Link>

      </div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/tableTask' element={<Table/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/addcount' element={<CartAddo/>}/>
        <Route path='/incDecr' element={<Addcard/>}/>
        <Route path='/counter' element={<UpdatingPhase/>}/>
      </Routes>
    </Router>
  );
}

export default APP;
