import React from 'react';
import Button from '../elements/NavbarButton';
import LoginButton from '../elements/LoginButon';
import BanggaLogo from '../img/BANGGA.png';

function Promo() {
    const links = {
        home: '/',
        games: '/games',
        promo: '/promo',
        login: '/login',
        construction: '/cs',
    };

    const promos = [
        {
            title: 'Purchase BANGGA Voucher Worth IDR 50,000 for Only IDR 10,000',
            period: 'Period: May 15 - 31, 2024',
            bgClass: 'bg-amber-500'
        },
        {
            title: 'Free Fire Voucher 50% Discount',
            period: 'Period: June 1 - 15, 2024',
            bgClass: 'bg-green-500'
        },
        {
            title: '30% Discount for EA SPORTS FC Mobile',
            period: 'Period: June 10 - 20, 2024',
            bgClass: 'bg-blue-500'
        },
        {
            title: 'Special Promo Mobile Legends - 20% Bonus',
            period: 'Period: June 5 - 25, 2024',
            bgClass: 'bg-red-500'
        },
        {
            title: 'Clash of Clans Gem Packs 25% Discount',
            period: 'Period: June 15 - 30, 2024',
            bgClass: 'bg-yellow-500'
        },
        {
            title: 'PUBG Mobile UC Vouchers - 40% Discount',
            period: 'Period: June 20 - July 10, 2024',
            bgClass: 'bg-purple-500'
        },
        {
            title: 'Brawl Stars Coin Packs 15% Bonus',
            period: 'Period: July 1 - 15, 2024',
            bgClass: 'bg-pink-500'
        }
    ];

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
                <h2 className="text-5xl font-bold mb-4 text-center pt-16 animate-slidein300">Promo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-16 pb-16 pt-10 animate-slidein500">
                    {promos.map((promo, index) => (
                        <a href={links.construction}>
                            <div key={index} className={`${promo.bgClass} p-4 text-black rounded-lg mb-4`}>
                                <h2 className="text-2xl font-bold">{promo.title}</h2>
                                <p>{promo.period}</p>
                            </div>
                        </a>
                    ))}
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
}

export default Promo;