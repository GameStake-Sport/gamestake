'use client'
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { useWallet } from '@/components/context/walletconexion';
import Link from "next/link";


export default function Header() {
    const { walletAddress, connectWallet, fetchPoints } = useWallet();
    const [userPoints, setUserPoints] = useState<any>(0); // Estado local para puntos del usuario

    // Llama a fetchPoints cuando la billetera esté conectada y actualiza el estado de los puntos
    useEffect(() => {
      const getPoints = async () => {
        if (walletAddress) {
          const points = await fetchPoints(); // Llamada a fetchPoints del contexto
          let formatPoints = points.toString();
        
          setUserPoints(formatPoints); // Actualiza el estado local de puntos
        }
      };
      getPoints();
    }, [walletAddress, fetchPoints]); // Dependencia de walletAddress

    return (
        <header className="fixed top-0 w-full bg-custom-bg z-50">
            <div className="container max-w-full mx-auto flex justify-between items-center py-4">
                {/* Logo y Navegación Izquierda */}
                <div className="flex items-center space-x-4">
                    <div className="font-bold text-xl mr-5">
                        <img className="w-24 ml-5" src="/images/logo.svg" alt="Logo" />
                    </div>

                    {/* Botones (Responsive para móviles) */}
                    <div className="hidden md:flex space-x-4">
                        <Link href="/"> 
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
                        </Link>
                        <Link href="/marketplace">
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
                                <span className="m-3">Marketplace</span>
                            </Button>
                        </Link>
                        <Link href="/history">
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
                                <span className="m-3">History</span>
                            </Button>
                        </Link>
                        <Link href="/album">
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
                                <span className="m-3">Album</span>
                            </Button>
                        </Link>
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
                                <span className="m-3">{userPoints} Points</span>
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
