import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Part1 from './components/Part1/Part1';
import Part2 from './components/Part2/Part2';
import Prevnext from './components/Prevnext/Prevnext';
import Vcomp from './components/Vcomp/Vcomp';
import Part4 from './components/Part4/Part4';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Part1></Part1>
      <Part2></Part2>
      <Vcomp />
      <Carousel/>
      <Part4/>
      <Prevnext />
      <Footer/>
    </div>
  );
}


export default App;
