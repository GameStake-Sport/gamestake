import React from 'react';
import CurrentPools from './CurrentPools';
import PlayerInfo from './PlayerInfo';
import Wallet from './Wallet';
import Nickname from './Nickname';
import MyPoints from './MyPoints';

const UserDashboard: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CurrentPools />
                <PlayerInfo />
                <Wallet />
                <Nickname />
                <MyPoints />
            </div>
        </div>
    );
};

export default UserDashboard