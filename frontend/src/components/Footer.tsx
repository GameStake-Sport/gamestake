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
        </footer>
    );
};

export default Footer;
