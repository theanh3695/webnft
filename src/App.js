import { useState } from 'react';
import './App.css';
import TestNFT from './TestNFT';
import NavBar from './NavBar';


function App() {
  //ket noii
  const [accounts, setAccounts] = useState([]);

  return (
    <div classname="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <TestNFT accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className='moving-background'></div>
    </div>
  );
}

export default App;
