import React from 'react';

const CurrentPools: React.FC = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-white mb-4">Current Pools</h2>
            {/* Replace with dynamic pool data */}
            <p className="text-gray-400">No active pools.</p>
        </div>
    );
};

export default CurrentPools;
