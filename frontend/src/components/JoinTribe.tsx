import React from 'react';

const JoinTribe = () => {
    return (
        <div className="mt-[150px] md:mt-[180px] flex relative flex-col lg:flex-row justify-between rounded-[20px] w-full h-[500px] lg:h-[252px] bg-no-repeat bg-[50%_50%] bg-[auto_100%] lg:bg-[100%_auto] overflow-hidden text-white bg-email-bg">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

            {/* Text Section */}
            <div className="flex flex-col lg:gap-10 p-5 lg:p-8 max-w-[500px] z-[1]">
                <div className="flex flex-col gap-1 lg:gap-3">
                    <span className="text-[30px] leading-[40px] font-semibold">Join our tribe!</span>
                    <span className="text-base font-normal">
                        Stay in the loop with all things new – subscribe to our mailing list for updates, promotions, and tournaments.
                    </span>
                </div>
                <button className="relative px-12 py-3 rounded-xl bg-[#7747e5] text-white font-semibold transition-all duration-300 hover:bg-[#6a40d1]">
                    Subscribe
                </button>
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden w-full pb-10 px-5 z-[2]">
                <button className="inline-flex justify-center items-center gap-[8px] btn-main-dex w-full">
                    Subscribe
                </button>
            </div>

            {/* Image */}
            <img
                className="absolute lg:relative -bottom-10 object-cover lg:bottom-0 rotate-[9.5deg] left-5 lg:left-0 lg:mx-0 w-[437.27px] h-[412.874px] lg:h-[387.65px] origin-top-left z-[1]"
                src="images/image1.png"
                alt="Join Our Tribe"
            />
        </div>
    );
};

export default JoinTribe;
