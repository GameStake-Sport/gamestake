import React from 'react';

interface Feature {
    title: string;
    description: string;
    icon: string;
}

const features: Feature[] = [
    {
        title: 'Decentralized',
        description: 'Completely powered by blockchain, ensuring transparency.',
        icon: '🛡️',
    },
    {
        title: 'Fast Transactions',
        description: 'Enjoy fast transaction speeds with low fees.',
        icon: '⚡',
    },
    {
        title: 'Multiple Markets',
        description: 'Bet on sports, eSports, and more.',
        icon: '🎮',
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-12 bg-custom-bg text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8">Why Choose Dexsport?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                            <div className="text-6xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
