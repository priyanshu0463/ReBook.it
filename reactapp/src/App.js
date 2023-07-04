import Navbar from './components/Navbar';
// import Test from './components/Test';
import Api from './components/Api';
import Trade from './components/Trade';
import About from './components/About';
import Shared from './components/Shared';
// import Cart from './components/Cart';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={ <Api/> }/>
    <Route exact path="/trade" element={<Trade/> } />
    <Route exact path="/shared" element={<Shared />} />
    <Route exact path="/about" element={<About/>} />
    {/* <Route exact path="/test" element={<test/>} />  */}
  
  
  </Routes>
  </BrowserRouter>
  </React.Fragment>
  
  );
}

export default App;
