import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
            if (response.data.success) {
                alert('Login successful!');
                navigate('/home');
            } else {
                alert(response.data.message || 'Incorrect password! Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
            <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                <h2 className='mb-3 text-primary'>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p className='container my-2'>Don't have an account?</p>
                <Link to='/register' className="btn btn-secondary">Register</Link>
            </div>
        </div>
    );
};

export default LoginForm;
