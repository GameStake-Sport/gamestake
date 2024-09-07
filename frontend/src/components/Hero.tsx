import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-[600px] flex justify-center items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
            <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Bet on Your Own Terms
                </h1>
                <p className="text-lg mb-8">
                    Sports betting powered by blockchain. Fast, secure, and decentralized.
                </p>
                <a
                    href="#"
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded"
                >
                    Start Betting
                </a>
            </div>
        </section>
    );
};

export default Hero;
