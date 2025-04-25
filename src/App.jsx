import './App.css';
import React from 'react';
import Home from './Components/Home/Home.jsx';
// import Navbar from './Components/Navbar/Navbar.jsx';
import Middle from './Components/Middle/Middle.jsx';
import Destination from './Components/Destination/Destination.jsx';
import Response from './Components/Response/Response.jsx';
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <div>
      <Home />
      <Middle />
      <Destination />
      <Response />
      <Footer />
    </div>
  );
}

export default App;
