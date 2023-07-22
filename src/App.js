import { useState } from 'react';
import './App.css';
import { Head } from './Head/Head';
import { PrivateRouter } from './PrivateRouter';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Head/>
   <PrivateRouter/>
   <Footer/>
   <store/>
    </div>
  );
}

export default App;
