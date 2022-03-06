
import './App.css';
import { useState, useEffect } from 'react';
import In from './F/In';
import In1 from './F/In1';

function App() {
  const [naykos, setNykos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setNykos(data));
  }, [])
  const n = naykos.slice(0,5);
  return (
    <div className="App">
      <MovieCount></MovieCount>
      <In></In>
      <In1></In1>
      {
        
        n.map(nk => <Nyok name={nk.name} key={nk.id} email={nk.email}></Nyok>)
      }
    </div>
  );
}
function Nyok(props) {
  const liStyle = {
    backgroundColor: 'black',
    color: 'white',
    width: '500px',
    margin: '5px',
    padding: '10px'
  }
  return (
    <div>
      <li style={liStyle}>{props.name} || {props.email}</li>
    </div>
  )
}

function MovieHandaler(props) {
  return (
    <div>
      <h2>My Movie : {props.count} </h2>
    </div>
  )
}

function MovieCount() {
  const [counter, setCounter] = useState(0);
  const countHandaler = () => setCounter(counter + 1);
  return (
    <div>
      <button onClick={countHandaler}>Add Movie..!</button>
      <h3>Total Movie : {counter}</h3>
      <MovieHandaler count={counter}></MovieHandaler>
      <MovieHandaler count={counter + 2}></MovieHandaler>
      <MovieHandaler count={counter + 5}></MovieHandaler>
    </div>
  )
}




export default App;
