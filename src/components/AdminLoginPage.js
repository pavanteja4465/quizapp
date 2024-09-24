
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const admin_base_url = 'http://127.0.0.1:8000/api/admin'; // Replace with your actual backend URL

const AdminLoginPage = () => {
    const [message, setMessage] = useState('');
    const navgate=useNavigate();

    const AdminloginUser = async (event) => {
        event.preventDefault();
        setMessage(''); // Clear any previous messages

        const auth_user = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        try {
            const response = await axios.post(admin_base_url + 'login/', auth_user, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            if (response){
            localStorage.clear();
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            setMessage('Login successful'); 
            navgate('/data')
            }
        } catch (error) {
            setMessage('Login details are invalid'); 
        } 
        

    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>
            <form onSubmit={AdminloginUser}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <button type="submit">Login </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLoginPage;