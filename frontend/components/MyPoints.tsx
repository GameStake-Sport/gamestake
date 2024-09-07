import React from 'react';

const MyPoints: React.FC = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-white mb-4">My Points</h2>
            {/* Replace with dynamic points data */}
            <p className="text-gray-400">Points: 0</p>
        </div>
    );
};

export default MyPoints;
