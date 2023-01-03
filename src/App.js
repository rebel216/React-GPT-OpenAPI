import './App.css';
import { Footer, Blog, Features, Header, WhatGPT, Possibility } from './containers/index'
import {CTA , Brand , Navbar } from'./components/index'
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      < CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
