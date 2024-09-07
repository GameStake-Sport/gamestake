// components/ScrollableSportsLinks.tsx
import React from 'react';

interface SportLink {
    href: string;
    imgSrc: string;
    alt: string;
    label: string;
}

const sportsLinks: SportLink[] = [
    {
        href: "https://dexsport.io/sports/live/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/ca1f14f3-b8f5-4fd2-52c7-a7406127fd00/public",
        alt: "Live",
        label: "Live",
    },
    {
        href: "https://dexsport.io/sports/football/tournaments/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/cb1ef201-3cb5-42f7-bd01-006bbdbcb200/public",
        alt: "Football",
        label: "Football",
    },
    {
        href: "https://dexsport.io/sports/tennis/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/cb805b2d-276e-4f3f-da96-0a7d7ed22200/public",
        alt: "Tennis",
        label: "Tennis",
    },
    {
        href: "https://dexsport.io/sports/basketball/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/315d4d6c-3d8a-4f6f-7366-2bdfc1516d00/public",
        alt: "Basketball",
        label: "Basketball",
    },
    {
        href: "https://dexsport.io/sports/hockey/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/66baf424-0f17-4d21-e639-c3cd552eb600/public",
        alt: "Ice hockey",
        label: "Ice hockey",
    },
    {
        href: "https://dexsport.io/sports/csgo/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/567e3354-6327-4bec-e249-ba283dc60700/public",
        alt: "CS2",
        label: "CS2",
    },
    {
        href: "https://dexsport.io/sports/dota2/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/978564b4-bb9c-48bd-87d0-e301b5c0ab00/public",
        alt: "Dota 2",
        label: "Dota 2",
    },
    {
        href: "https://dexsport.io/sports/american-football/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/2c79b2f7-af6b-4419-60e5-1d3ae0518100/public",
        alt: "American football",
        label: "American football",
    },
    {
        href: "https://dexsport.io/sports/baseball/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/4b852484-ae3e-4b9d-a127-6e79bd68e800/public",
        alt: "Baseball",
        label: "Baseball",
    },
    {
        href: "https://dexsport.io/sports/mma/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/401c11b9-392f-4086-66f5-8c25ca0a7a00/public",
        alt: "MMA",
        label: "MMA",
    },
    {
        href: "https://dexsport.io/sports/boxing/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/016a18d4-dc99-4313-dab1-ebc6d3ba0e00/public",
        alt: "Boxing",
        label: "Boxing",
    },
    {
        href: "https://dexsport.io/sports/valorant/",
        imgSrc: "https://imagedelivery.net/_IP0fEMP4F-W0FKGt0DEHg/b2244c1a-539a-41f5-a4ee-9864fa391b00/public",
        alt: "Valorant",
        label: "Valorant",
    },
];

const ScrollableSportsLinks: React.FC = () => {
    return (
        <div className="flex container overflow-x-auto scrollbar-hide text-white mt-10">
            <div className="flex w-max lg:w-full gap-8 px-2 shrink-0 whitespace-nowrap">
                {sportsLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="flex gap-1 items-center text-sm font-medium transition-all opacity-50 hover:opacity-100"
                    >
                        <img src={link.imgSrc} alt={link.alt} width={20} height={20} />
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ScrollableSportsLinks;
