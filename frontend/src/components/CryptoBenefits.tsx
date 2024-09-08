import React from 'react';

const CryptoBenefits = () => {
    return (
        <div className="max-w-[1220px] mx-auto relative text-white">
            <div className="flex flex-col lg:h-[459px] lg:flex-row lg:items-center mb-32">
                <div className="px-[10px] relative z-[1]">
                    <h2 className="mt-32 mb-5 font-header text-[34px] leading-[48px] md:text-[44px] md:leading-[56px]">
                        Dive into the best crypto betting experience
                    </h2>
                    <p>Welcome to our minimalistic and captivating platform, designed to help you build your ideal NFT team.</p>
                    <button className="relative px-12 py-3 rounded-xl bg-[#7747e5] text-white font-semibold transition-all duration-300 hover:bg-[#6a40d1] mt-10">
                        Start playing
                    </button>
                </div>
                <img
                    alt="illustration"
                    loading="lazy"
                    width="550"
                    height="460"
                    decoding="async"
                    className="self-end w-full relative -right-5 -mt-12 -bottom-12 lg:right-0 lg:bottom-0 max-w-[700px] lg:max-w-[550px]"
                    src="images/image3.png"
                />
            </div>

            <div className="flex gap-3 overflow-x-auto px-[10px] no-scrollbar mb-32">
                <div role="button" className="w-[291px] min-h-[100px] shrink-0 flex items-center gap-3 p-4 bg-white-5 rounded-[20px] backdrop-blur-30 group duration-300 hover:bg-white-10 hover:dex-outline">
                    <img src="images/no-kyc.webp" className="w-[60px] h-[60px]" alt="No KYC" />
                    <div className="flex flex-col gap-1 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="font-medium leading-6">No KYC</span>
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white-10 opacity-0 duration-300 group-hover:opacity-100">
                                <img src="/assets/img/pink/arrow.svg" alt="arrow" width="6" height="6" />
                            </div>
                        </div>
                        <span className="text-sm leading-5 text-white-50">Start just by connecting your Web3 wallet</span>
                    </div>
                </div>

                {/* Freebets */}
                <a className="w-[291px] min-h-[100px] shrink-0 flex items-center gap-3 p-4 bg-white-5 rounded-[20px] backdrop-blur-30 group duration-300 hover:bg-white-10 hover:dex-outline" href="/bonus">
                    <img src="images/free-bets.webp" className="w-[60px] h-[60px]" alt="Free Bets" />
                    <div className="flex flex-col gap-1 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="font-medium leading-6">Freebets</span>
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white-10 opacity-0 duration-300 group-hover:opacity-100">
                                <img src="/assets/img/pink/arrow.svg" alt="arrow" width="6" height="6" />
                            </div>
                        </div>
                        <span className="text-sm leading-5 text-white-50">Take part in platform promo and get Freebets</span>
                    </div>
                </a>

                {/* Cashback */}
                <a className="w-[291px] min-h-[100px] shrink-0 flex items-center gap-3 p-4 bg-white-5 rounded-[20px] backdrop-blur-30 group duration-300 hover:bg-white-10 hover:dex-outline" href="/vip">
                    <img src="images/cashback.webp" className="w-[60px] h-[60px]" alt="Cashback" />
                    <div className="flex flex-col gap-1 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="font-medium leading-6">Cashback</span>
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white-10 opacity-0 duration-300 group-hover:opacity-100">
                                <img src="/assets/img/pink/arrow.svg" alt="arrow" width="6" height="6" />
                            </div>
                        </div>
                        <span className="text-sm leading-5 text-white-50">Get huge bonuses on your turnover</span>
                    </div>
                </a>

                {/* Giveaways */}
                <a className="w-[291px] min-h-[100px] shrink-0 flex items-center gap-3 p-4 bg-white-5 rounded-[20px] backdrop-blur-30 group duration-300 hover:bg-white-10 hover:dex-outline" href="/contests">
                    <img src="images/giveaways.webp" className="w-[60px] h-[60px]" alt="Giveaways" />
                    <div className="flex flex-col gap-1 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="font-medium leading-6">Giveaways</span>
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white-10 opacity-0 duration-300 group-hover:opacity-100">
                                <img src="/assets/img/pink/arrow.svg" alt="arrow" width="6" height="6" />
                            </div>
                        </div>
                        <span className="text-sm leading-5 text-white-50">Monthly rewards for active users</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default CryptoBenefits;
