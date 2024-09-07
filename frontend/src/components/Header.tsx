'use client'
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useWallet } from '@/components/context/walletconexion';

export default function Header() {
    const { walletAddress, connectWallet } = useWallet();

    return (
        <header className="fixed top-0 w-full bg-custom-bg z-50">
            <div className="container max-w-full mx-auto flex justify-between items-center py-4">
                {/* Logo y Navegación Izquierda */}
                <div className="flex items-center space-x-4">
                    <div className="font-bold text-xl">
                        <img className="w-28 ml-5" src="/images/logo.svg" alt="Logo" />
                    </div>

                    {/* Botones (Responsive para móviles) */}
                    <div className="hidden md:flex space-x-4">
                        <Button className="rounded-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </Button>
                        <Button className="rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="m-3">Sports</span>
                        </Button>
                        <Button className="rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="m-3">Games</span>
                        </Button>
                        <Button className="rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="m-3">More</span>
                        </Button>
                    </div>
                </div>

                {/* Sección Derecha: Botones */}
                <div className="flex items-center space-x-4">
                    <a
                        href=""
                        className="relative w-[40px] h-[40px] mr-[12px] flex-shrink-0 flex justify-center items-center group"
                    >
                        <div className="absolute w-[28px] h-[28px] blur-[4.7px] rounded-full bg-[radial-gradient(1919%_103%_at_101%_42%,#F22F2F_3%,#5D8BFE_45%,_#F22F2F_100%)] hidden group-hover:block"></div>
                        <div className="absolute w-[26px] h-[26px] blur-[5.3px] rounded-full bg-[radial-gradient(1919%_103%_at_101%_43%,#D04DFF_3%,#5D8BFE_45%,#C268FF_100%)] group-hover:w-[34px] group-hover:h-[34px] duration-300"></div>
                        <img
                            className="w-[59px] h-auto bottom-0 -right-1 absolute max-w-none"
                            src="images/gift.webp"
                            alt="Gift"
                        />
                    </a>
                    <Button className="rounded-full">
                        <div className="h-[40px] w-auto pl-2 pr-1 flex flex-row items-center bg-white-5 rounded-full relative mr-[12px]">
                            <span className="ml-2 text-base text-white font-semibold">
                                0.00
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="none"
                                viewBox="0 0 12 12"
                            >
                                <path
                                    fill="#fff"
                                    d="M5.394 7.913a.702.702 0 0 0 1.212 0L8.89 4.13C9.188 3.64 8.845 3 8.284 3H3.716c-.562 0-.904.639-.606 1.131z"
                                ></path>
                            </svg>
                        </div>
                        <div className="absolute z-[-1] w-[24px] h-[32px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </Button>
                    {walletAddress ? (
                <Button className="rounded-full w-32 ml-10">
                    <span className="m-3">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                </Button>
            ) : (
                <Button className="rounded-full w-32 ml-10" onClick={connectWallet}>
                    <span className="m-3">Connect Wallet</span>
                </Button>
            )}
                </div>
            </div>
        </header>
    );
}
