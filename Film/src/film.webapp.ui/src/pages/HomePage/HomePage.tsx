import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/details');
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleButtonClick}>Go to details</button>
        </div>
    )
};

export default HomePage;