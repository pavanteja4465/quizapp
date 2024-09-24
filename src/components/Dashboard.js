import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const { firstName } = location.state || {};

    return (
        <div>
            {firstName ? (
                <h1>Welcome, {firstName}!</h1>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
    );
};

export default Dashboard;