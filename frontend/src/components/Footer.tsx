import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-[100px] md:pt-[120px] pb-20 lg:pb-10 mx-auto w-full flex flex-col gap-10 relative z-1 max-w-[1200px] px-2 text-white">
            <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between items-center xl:items-stretch">
                <div className="hidden xl:flex gap-20">
                    {/* Platform Section */}
                    <div className="flex flex-col gap-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/">
                            <h4 className="text-[22px] font-semibold leading-8">Platform</h4>
                        </a>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/">Home</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/sports/">Sports</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/games/">Games</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/profile/">Profile</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/settings/">Settings</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/pools/">Pools</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/leaderboard/">Leaderboard</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/contests/">Contests</a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="flex flex-col gap-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/about/">
                            <h4 className="text-[22px] font-semibold leading-8">Resources</h4>
                        </a>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/about/">About</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/desu/">Token</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/add-tokens/">Add coins & network</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/brand-resources/">Brand resources</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/shop/">Merch</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/careers/">Careers</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_self" rel="noopener noreferrer" href="https://dexsport.io/contacts/">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="flex flex-col gap-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/academy/">
                            <h4 className="text-[22px] font-semibold leading-8">Services</h4>
                        </a>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/academy/">Academy</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/help-center/">Help center</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/docs-home/">Documentation</a>
                            </li>
                        </ul>
                    </div>

                    {/* Promos Section */}
                    <div className="flex flex-col gap-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/bonus/">
                            <h4 className="text-[22px] font-semibold leading-8">Promos</h4>
                        </a>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/bonus/">Bonus club</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/vip/">VIP cashback</a>
                            </li>
                            <li className="text-sm text-white-50">
                                <a target="_blank" rel="noopener noreferrer" href="https://dexsport.io/affiliate-program/">Affiliate program</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Version */}
                <div className="xl:hidden flex flex-col w-full max-w-md gap-3">
                    {/* Sections similar to the ones in desktop but collapsible */}
                    <div className="flex flex-col">
                        <button className="flex items-center justify-between px-3 py-2 rounded-lg bg-white-5">
                            <span className="text-base font-semibold">Platform</span>
                            <img src="/assets/img/footer_close.svg" alt="close" className="w-6 h-6" />
                        </button>
                        {/* Collapsible content goes here */}
                    </div>
                </div>
            </div>
            <div className="hidden xl:flex flex-col gap-4 mt-5">
                <h4 className="text-[22px] font-semibold leading-8">Communities</h4>
                <ul className="flex justify-between flex-wrap">
                    <li>
                        <a
                            href="https://t.me/dexsport_en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/33bc7f5f-7209-45a8-c79d-3f262fcfdb00/public"
                                alt="International"
                            />
                            <span className="text-sm">International</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_cn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/4eabebf4-4aaa-48d8-ef1b-3394bb37c800/public"
                                alt="China"
                            />
                            <span className="text-sm">China</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/d493274a-85e9-484b-0632-1e9a742ead00/public"
                                alt="France"
                            />
                            <span className="text-sm">France</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_cis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/95a283a5-5b39-4c9f-9509-c8d23e59ed00/public"
                                alt="Russia"
                            />
                            <span className="text-sm">Russia</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/93ac289b-6056-4f5b-9451-270ca0e89600/public"
                                alt="Indonesia"
                            />
                            <span className="text-sm">Indonesia</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_tr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/fbb29b5d-f1ae-44fa-1743-3cdf4d764f00/public"
                                alt="Turkey"
                            />
                            <span className="text-sm">Turkey</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/40b7cc25-102d-4d5f-938f-7bda6ca82f00/public"
                                alt="India"
                            />
                            <span className="text-sm">India</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_vn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/f7c80b4a-3357-404a-d0a6-4be89e999100/public"
                                alt="Vietnam"
                            />
                            <span className="text-sm">Vietnam</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_esp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/f727cef7-6b69-4276-ffa9-57ae78ca5d00/public"
                                alt="Spain"
                            />
                            <span className="text-sm">Spain</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/dexsport_pt_br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/a5cb9e5f-65f0-42e5-992a-69bb2ebbcb00/public"
                                alt="Brasil&Portugal"
                            />
                            <span className="text-sm">Brasil&Portugal</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-5">
                <div className="flex-wrap justify-center text-sm text-white-50 flex gap-4 md:gap-5">
                    <span className="w-full md:w-auto text-center">
                        © 2024 Game-Stake | All rights reserved
                    </span>
                    <a
                        href="https://mainnet.dexsport.io/media/footer_docs/0e73_PRIVACY_NOTICE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="https://mainnet.dexsport.io/media/footer_docs/7d26_DEXSPORT_TERMS_02.09.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terms &amp; Conditions
                    </a>
                    <a href="/sitemap">Sitemap</a>
                </div>

                <div className="text-sm text-white-50 flex sm:justify-between gap-3 md:gap-5 flex-wrap justify-center items-center content-center">
                    <div className="w-full sm:w-auto flex justify-center gap-3 md:gap-5">
                        <a
                            href="https://coinmarketcap.com/ru/currencies/dexsport/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            Coinmarketcap
                        </a>
                        <a
                            href="https://www.coingecko.com/en/coins/dexsport"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            CoinGecko
                        </a>
                    </div>

                    <a
                        href="https://www.dextools.io/app/bnb/pair-explorer/0xc0fc8ad7e7d61e63ed57c8fb727f7e50b98778ef"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        DEXTools
                    </a>
                    <a
                        href="https://whattofarm.io/pairs/bnb-chain-pancakeswap-desu-busd-created-2021-11-18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        WhatToFarm
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
