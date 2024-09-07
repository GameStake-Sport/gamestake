import React from 'react';

const Login: React.FC = () => {
    const handleLogin = () => {
        // Add Web3.js or Ethers.js wallet connection logic here
        console.log('Connecting wallet...');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <button
                onClick={handleLogin}
                className="bg-purple-600 text-white py-3 px-8 rounded-lg text-xl"
            >
                Connect Wallet
            </button>
        </div>
    );
};

export default Login;
