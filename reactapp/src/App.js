import Navbar from './components/Navbar';
// import Test from './components/Test';
import Api from './components/Api';
import Trade from './components/Trade';
import About from './components/About';
import Shared from './components/Shared';
import Signup from './components/Signup';
// import Cart from './components/Cart';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import React from 'react';
import {Container} from "react-bootstrap"
import {AuthProvider} from "./contexts/AuthContext"


function App() {
  return (
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
     >
      <Signup />

    </Container>
    </AuthProvider>
  //   <React.Fragment>
  //   <BrowserRouter>
  //   <Navbar/>
  //   <Routes>
  //   <Route exact path="/" element={ <Api/> }/>
  //   <Route exact path="/trade" element={<Trade/> } />
  //   <Route exact path="/shared" element={<Shared />} />
  //   <Route exact path="/about" element={<About/>} />
  //   {/* <Route exact path="/test" element={<test/>} />  */}
  
  
  // </Routes>
  // </BrowserRouter>
  // </React.Fragment>
  
  );
}

export default App;
