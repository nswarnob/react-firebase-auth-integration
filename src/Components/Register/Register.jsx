import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    const handleRegister = (event)=>{
 event.preventDefault();
 const email = event.target.email.value;
 const password = event.target.password.value;



 
    }


    return (

            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Please Register</h1>
                <form onSubmit={handleRegister} >
                    <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                </form>
                <p>Already have an account? Please <Link to='/login' className='text-blue-500' >Login</Link></p>
            </div>
            </div>
 
    );
};

export default Register;