"use client";

import React from 'react';

interface Benefit {
    imgSrc: string;
    title: string;
    description: string;
    link?: string;
}

const benefits: Benefit[] = [
    {
        imgSrc: 'images/no-kyc.webp',
        title: 'No KYC',
        description: 'Start just by connecting your Web3 wallet',
    },
    {
        imgSrc: 'images/free-bets.webp',
        title: 'Freebets',
        description: 'Take part in platform promo and get Freebets',
        link: '/bonus',
    },
    {
        imgSrc: 'images/cashback.webp',
        title: 'Cashback',
        description: 'Get huge bonuses on your turnover',
        link: '/vip',
    },
    {
        imgSrc: 'images/giveaways.webp',
        title: 'Giveaways',
        description: 'Monthly rewards for active users',
        link: '/contests',
    },
];

const BenefitsList: React.FC = () => {
    const handleClick = (link?: string) => {
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <div className="flex gap-3 overflow-x-auto px-[10px] no-scrollbar text-center text-white">
            {benefits.map((benefit, index) => (
                <div
                    key={index}
                    role={benefit.link ? 'link' : 'button'}
                    className="w-[291px] min-h-[100px] shrink-0 flex items-center gap-3 p-4 bg-white-5 rounded-[20px] backdrop-blur-30 group duration-300 hover:bg-white-10 hover:dex-outline"
                    onClick={() => handleClick(benefit.link)}
                >
                    <img
                        src={benefit.imgSrc}
                        className="w-[60px] h-[60px]"
                        alt={benefit.title}
                    />
                    <div className="flex flex-col gap-1 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="font-medium leading-6">{benefit.title}</span>
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white-10 opacity-0 duration-300 group-hover:opacity-100">
                                <img
                                    src="/assets/img/pink/arrow.svg"
                                    alt="arrow"
                                    width={6}
                                    height={6}
                                />
                            </div>
                        </div>
                        <span className="text-sm leading-5 text-white-50">
                            {benefit.description}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BenefitsList;

