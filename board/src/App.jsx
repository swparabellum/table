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
  
  const changeEvent = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/table`)
      .then(response => {
        // console.log(" :: ",response);
          setUsers(response.data.result);
      })
      .catch(error => {
        console.error("error :: ",error);
      });
  }, []);

  const submitEvent = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BASE_URL}/table`, userData)
      // .then(response => {
      //   // 성공 시 목록 갱신
      //   return axios.get(`${import.meta.env.VITE_BASE_URL}/table`);
      // })
      // .then(response => {
      //   setUsers(response.data.result);
      //   setUserData({ name: '', email: '', phone: '', website: '' });
      // })
      .then(response => {
        console.log(" success :: ",response);
      })
      .catch(error => {
        console.error("error :: ",error);
      });
  };

  const delEvent = (e,user) => {
    e.preventDefault();
    console.log("user value is :: ",user);
    axios.delete(`${import.meta.env.VITE_BASE_URL}/table/${user.id}`)
      .then(response => {
        console.log(" delete success :: ",response);
        return axios.get(`${import.meta.env.VITE_BASE_URL}/table`);
      })
      .catch(error => {
        console.error("error :: ",error);
      })
  }


  return (
    <>
<form onSubmit={submitEvent}>
  <div className='input-group'>
    <span className='input-group-text'>name</span>
    <input type='text' className='form-control' placeholder='name' required name="name" onChange={changeEvent} value={userData.name} />
  </div>
  <div className='input-group'>
    <span className='input-group-text'>email</span>
    <input type='text' className='form-control' placeholder='email' required name="email" onChange={changeEvent} value={userData.email} />
  </div>
  <div className='input-group'>
    <span className='input-group-text'>phone</span>
    <input type='text' className='form-control' placeholder='phone' required name="phone" onChange={changeEvent} value={userData.phone} />
  </div>
  <div className='input-group'>
    <span className='input-group-text'>website</span>
    <input type='text' className='form-control' placeholder='website' required name="website" onChange={changeEvent} value={userData.website} />
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
              <td><button className='btn btn-danger' onClick={(e) => {delEvent(e,user)}}>삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App
