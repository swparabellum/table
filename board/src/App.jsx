import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });

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

  const SubmitEvent = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', )

    
  }

  return (
    <>
<form onSubmit={SubmitEvent}>
  <div className='input-group'>
    <span className='input-group-text'>name</span>
    <input type='text' className='form-control' placeholder='name' required name="name" value={userData.name} onChange={handleChange} />
  </div>
  <div className='input-group'>
    <span className='input-group-text'>email</span>
    <input type='text' className='form-control' placeholder='email' required name="email" value={userData.email} onChange={handleChange} />
  </div>
  <div className='input-group'>
    <span className='input-group-text'>phone</span>
    <input type='text' className='form-control' placeholder='phone' required name="phone" value={userData.phone} onChange={handleChange} />
  </div>
  <div className='input-group'>
    <span className='input-group-text'>website</span>
    <input type='text' className='form-control' placeholder='website' required name="website" value={userData.website} onChange={handleChange} />
  </div>
  <button type='submit' className='btn btn-primary'>Submit</button>
</form>

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
