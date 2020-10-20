import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importing components
import Minesweeper from './components/Minesweeper';
import Difficulty from './components/Difficulty';
import Timer from './components/Timer';


function App() {
  const [diff, setDiff] = useState("Medium");
  const [status, setStatus] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [t, setT] = useState(0);

  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Difficulty diff = {diff} setDiff = {setDiff} setNewGame = {setNewGame} setStatus = {setStatus}/>
      <Timer status = {status} setStatus={setStatus} newGame={newGame} setNewGame= {setNewGame} result = {result} t={t} setT = {setT}/>
      <Minesweeper diff = {diff} newGame = {newGame} setNewGame = {setNewGame} setStatus = {setStatus} setResult = {setResult} t={t}/>
    </div>
  );
}

export default App;
