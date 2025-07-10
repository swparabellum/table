import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import NewUsersForm from "./pages/main/newUsersForm.jsx";


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
        // console.log(" :: ",response);
          setUsers(response.data.result);
      })
      .catch(error => {
        console.error("error :: ",error);
      });
  }, []);


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

    <NewUsersForm />

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
