import React from 'react';
import Button from '../elements/NavbarButton';
import LoginButton from '../elements/LoginButon';
import BanggaLogo from '../img/BANGGA.png';

function Construction() {
    const links = {
        home: '/',
        games: '/games',
        promo: '/promo',
        login: '/login',
        signup: '/signup'
    };

    return (
        <>
            <div className="bg-purple-700 text-white">
                <nav className="fixed w-full bg-purple-900 text-white p-4 flex justify-start z-10">
                    <div className="mr-8">
                        <a href={links.home}>
                            <img src={BanggaLogo} alt="Bangga Logo" className="w-10 shadow-2xl bg-white rounded-md" />
                        </a>
                    </div>
                    <div className="flex space-x-4">
                        <Button>
                            <a href={links.home}>Home</a>
                        </Button>
                        <Button>
                            <a href={links.games}>Games</a>
                        </Button>
                        <Button>
                            <a href={links.promo}>Promo</a>
                        </Button>
                    </div>
                    <div className="ml-auto">
                        <LoginButton bg="green">
                            <a href={links.login}>Login</a>
                        </LoginButton>
                    </div>
                </nav>
                <main className="min-h-screen flex items-center justify-center">
                    <h1 className="text-3xl font-bold">Oops, still under construction.</h1>
                </main>
                <footer className="p-10 bg-purple-500">
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="space-y-4 pr-0 md:pr-20 lg:pr-40">
                            <h2 className="font-bold text-lg text-black">BANGGA</h2>
                            <p className="text-white">BANGGA is your ultimate destination for all your gaming needs. We offer a wide range of game vouchers and in-game currencies at unbeatable prices.</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold text-lg text-black">Contact Us</h2>
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
            </div>
        </>
    )
}

export default Construction