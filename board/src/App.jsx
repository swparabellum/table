import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/table`)
      .then(response => {
        console.log(" :: ",response.data.result);
          setUsers(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className='input-group'>
        <span className='input-group-text'>name</span>
        <input type='text' className='form-control' placeholder='name' />
      </div>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App
