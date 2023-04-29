import logo from './logo.svg';
import './App.css';
import Test from './Test';
import { useState } from 'react';

function App() {
  const [Data,setData]=useState('')
  return (
    <div className="App">
       <h1>Helo</h1>
       <Test Text={'Dev'} Method={setData}/>
       <h2>{Data}</h2>
    </div>
  );
}

export default App;
