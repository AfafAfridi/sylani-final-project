import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const apiUrl = process.env.REACT_APP_API_URL; // Check the value of this variable

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log('API URL:', apiUrl); // Debugging line
        
        try {
            const response = await axios.post(`${apiUrl}/auth/register`, { name, email, password });
            console.log(response);
            if(response.data.message === "Email already registered") {
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            } else {
                alert("Registered successfully! Please Login to proceed.");
                navigate('/login');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
            <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                <h2 className='mb-3 text-primary'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control" 
                            id="name" 
                            onChange={(event) => setName(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label">
                            <strong>Email Id</strong>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            className="form-control" 
                            id="email" 
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="form-control" 
                            id="password" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

                <p className='container my-2'>Already have an account?</p>
                <Link to='/login' className="btn btn-secondary">Login</Link>
            </div>
        </div>
    );
}

export default Register;
