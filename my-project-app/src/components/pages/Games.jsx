import React from 'react';
import Button from '../elements/NavbarButton';
import LoginButton from '../elements/LoginButon';
import Freefirelogo from '../img/Free Fire Logo.png';
import Eafcsportsmobilelogo from '../img/Ea sport fc mobile logo.png';
import MobileLegendsLogo from '../img/Mobile legends logo.png';
import Clashofclanslogo from '../img/Clash of Clans Logo.png';
import Brawlstarslogo from '../img/Brawl stars logo.png';
import Pubgmobilelogo from '../img/Pubg mobile logo.png';
import BanggaLogo from '../img/BANGGA.png';
import DanaLogo from '../img/Dana logo.png';
import GopayLogo from '../img/Icon Gopay.png';


function Games() {
    const links = {
        home: '/',
        games: '/games',
        promo: '/promo',
        login: '/login',
        mobilelegends: '/ml',
        eafc: '/eafc',
        freefire: '/freefire',
        coc: '/coc',
        pubgm: '/pubgm',
        brawlstars: '/brawlstars'
    };
    return (
        <>
            <div className="bg-purple-900 text-white">
                <nav className="fixed w-full bg-purple-900 text-white p-4 flex justify-start z-10">
                    <div className="mr-8">
                        <a href={links.home}><img src={BanggaLogo} alt="Bangga Logo" className="w-10 shadow-2xl bg-white rounded-md" /></a>
                    </div>
                    <div className="flex space-x-4">
                        <Button><a href={links.home}>Home</a></Button>
                        <Button><a href={links.games}>Games</a></Button>
                        <Button><a href={links.promo}>Promo</a></Button>
                    </div>
                    <div className="ml-auto">
                        <LoginButton><a href={links.login}>Login</a></LoginButton>
                    </div>
                </nav>
            </div>
            <div className="bg-purple-700 min-h-screen text-white p-4 pt-20">
                <a href={links.promo}>
                    <div className="bg-amber-500 p-4 text-black rounded-lg mb-4 animate-slidein300">
                        <h2 className="text-2xl font-bold">Purchase BANGGA Voucher Worth IDR 50,000 for Only IDR 10,000</h2>
                        <p>Period: May 15 - 31, 2024</p>
                    </div>
                </a>
                <h2 className="text-5xl font-bold mb-4 text-center pt-16 animate-slidein500">Games</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-16 pb-16 pt-10 animate-slidein700">
                    <div className="bg-white text-black rounded-lg p-4">
                        <a href={links.freefire}>
                            <img src={Freefirelogo} alt="Free Fire" className="w-full h-48 object-contain mb-2 transition ease-in-out delay-150 hover:scale-110" />
                            <p className="text-center">Free Fire</p>
                        </a>
                    </div>
                    <div className="bg-white text-black rounded-lg p-4">
                        <a href={links.eafc}>
                            <img src={Eafcsportsmobilelogo} alt="EA SPORTS FC Mobile" className="rounded-full w-full h-48 object-contain mb-2 transition ease-in-out delay-150 hover:scale-110" />
                            <p className="text-center">EA SPORTS FC Mobile</p>
                        </a>
                    </div>
                    <div className="bg-white text-black rounded-lg p-4">
                        <a href={links.mobilelegends}>
                            <img src={MobileLegendsLogo} alt="Mobile Legends" className="w-full h-48 object-contain mb-2 transition ease-in-out delay-150 hover:scale-110" />
                            <p className="text-center">Mobile Legends</p>
                        </a>
                    </div>
                    <div className="bg-white text-black rounded-lg p-4">
                        <a href={links.coc}>
                            <img src={Clashofclanslogo} alt="Clash of Clans" className="w-full h-48 object-contain mb-2 transition ease-in-out delay-150 hover:scale-110" />
                            <p className="text-center">Clash of Clans</p>
                        </a>
                    </div>
                    <div className="bg-white text-black rounded-lg p-4">
                        <a href={links.pubgm}>
                            <img src={Pubgmobilelogo} alt="PUBG Mobile" className="w-full h-48 object-contain mb-2 transition ease-in-out delay-150 hover:scale-110" />
                            <p className="text-center">PUBG Mobile</p>
                        </a>
                    </div>
                    <div className="bg-white text-black rounded-lg p-4">
                        <a href={links.brawlstars}>
                            <img src={Brawlstarslogo} alt="Brawl Stars" className="w-full h-48 object-contain mb-2 transition ease-in-out delay-150 hover:scale-110" />
                            <p className="text-center">Brawl Stars</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white text-black rounded-lg p-4 mb-4 mx-16">
                    <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                    <div className="flex space-x-4">
                        <div className="flex-1 flex flex-col items-center">
                            <img src={DanaLogo} alt="Dana Logo" className="mb-2 w-[100px] h-[100px]" />
                            <p className="text-center">Dana</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <img src={GopayLogo} alt="GoPay Logo" className="mb-2 w-[100px] h-[100px]" />
                            <p className="text-center">GoPay</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="p-10 bg-purple-500">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="space-y-4 pr-0 md:pr-20 lg:pr-40">
                        <h2 className="font-bold text-lg">BANGGA</h2>
                        <p className="text-white">BANGGA is your ultimate destination for all your gaming needs. We offer a wide range of game vouchers and in-game currencies at unbeatable prices.</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg">Contact Us</h2>
                        <p className="text-white">Email: BanggaStore@bangga.com</p>
                        <p className="text-white">Phone: +62 812 3456 7890</p>
                        <p className="text-white">Address: Jl. Komputer No. 123, Jakarta, Indonesia</p>
                    </div>
                </div>
                <hr className="border-t-2 border-black my-4" />
                <div className="container pt-4">
                    <p className="text-white text-center">© KSM-MULTIMEDIA 2024</p>
                </div>
            </footer>
        </>
    );
};

export default Games
