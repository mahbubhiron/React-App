import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const students = [{
    name: 'Mahbub Alom',
    address: 'mirpur-2',
    phn: '01914679736',
    email: 'mhalom19@gmail.com',
    job: {
      name: 'singer',
      address: 'stage-performer'
    }
  },
  {
    name: 'kkkkkkk',
    address: 'mirpur-2',
    phn: '019146797',
    email: 'mhalom19@gmail.com',
    job: {
      name: 'singer',
      address: 'stage-performer'
    }
  },
  {
    name: 'lllll',
    address: 'mirpur-2',
    phn: '01914679736',
    email: 'mhalom19@gmail.com',
    job: {
      name: 'singer',
      address: 'stage-performer'
    }
  },
  {
    name: 'uuuuuu',
    address: 'mirpur-2',
    phn: '019136',
    email: 'mhalom19@gmail.com',
    job: {
      name: 'singer',
      address: 'stage-performer'
    }
  },
  {
    name: 'jjjjjjj',
    address: 'mirpur-2',
    phn: '01914',
    email: 'mhalom19@gmail.com',
    job: {
      name: 'singer',
      address: 'stage-performer'
    }
  }
  ];
  return (
    <div>
      <Counter></Counter>
      <Users></Users>
      <div className="card-container">
        {
          students.map(student => <Students students={student}></Students>)
        }
      </div>
    </div>
  );

}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
// dynamic data load from users api
function Users() {
  const liStyle = {
    listStyle: 'none',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    margin: '3px',
    width: '200px',
    textAlign: 'center',
  }
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      {
        users.map(user => <li style={liStyle}>{user.name}</li>)
      }
    </div>
  )
}
function Students(props) {
  // const {name, address} =props.users;
  const details = `${props.students.name}
  ${props.students.address}
  ${props.students.phn}
  ${props.students.email}
  ${props.students.job.name}
  ${props.students.job.address}
  `;
  return (
    <div class="card">
      <div class="card-header">
        <h2>Name : {props.students.name}</h2>
      </div>
      <div class="card-body">
        <img src="https://images.unsplash.com/photo-1645341777045-8f18b88e2712?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="card-image" alt="logo" />
        <p>Details : <pre>{details}</pre></p>
      </div>
      <div class="card-footer">
        <p>Footer.......!</p>
      </div>
    </div>
  )
}

export default App;
