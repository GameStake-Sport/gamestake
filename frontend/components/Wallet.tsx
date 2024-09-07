import React from 'react';

const Wallet: React.FC = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl text-white mb-4">My Wallet</h2>
            {/* Replace with dynamic wallet data */}
            <p className="text-gray-400">ETH Balance: 0.00</p>
        </div>
    );
};

export default Wallet;
