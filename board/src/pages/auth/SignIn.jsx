import { useEffect, useState } from 'react'
import axios from 'axios';

function SignIn() {

    return(
        <>
        <form>
            <input type="text" placeholder="Username" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2"/>
            <button type='submit' className='btn btn-primary'>SignIn</button>
        </form>
        </>
    );

}
export default SignIn;