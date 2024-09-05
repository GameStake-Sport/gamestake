import React from 'react';

interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-white mb-4">{title}</h2>
            <p className="text-gray-400">{content}</p>
        </div>
    );
};

export default Card;
