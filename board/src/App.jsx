import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('127.0.0.1/table')
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
        // You can also map through the users to display them in the table
        // Example: setUsers(response.data.map(user => ({ id: user.id, name: user.name, email: user.email, phone: user.phone, website: user.website })));
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  });
  return (
    <>
    <table className='table table-striped'>
      <thead>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>phone</th>
        <th>website</th>
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
