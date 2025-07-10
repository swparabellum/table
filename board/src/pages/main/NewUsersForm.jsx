import { useEffect, useState } from 'react'
import axios from 'axios';

function NewUsersForm() {

    const [users, setUsers] = useState([]);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    });
    
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
                console.log(" success :: ", response);
            })
            .catch(error => {
                console.error("error :: ", error);
            });
    };

    const changeEvent = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

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
        </>
    );
}
export default NewUsersForm;