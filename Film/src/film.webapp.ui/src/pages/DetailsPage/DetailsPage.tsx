import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailsPage: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>Details Page</h1>
            <button onClick={handleButtonClick}>Go to home page</button>
        </div>
    )
};

export default DetailsPage;