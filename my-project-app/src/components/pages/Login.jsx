import React from 'react';
import Button from '../elements/NavbarButton';
import LoginButton from '../elements/LoginButon';
import BanggaLogo from '../img/BANGGA.png';

function Login() {
    const links = {
        home: '/',
        games: '/games',
        promo: '/promo',
        login: '/login',
        signup: '/signup'
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
                <h2 className="text-5xl font-bold mb-4 text-center pt-16">Login</h2>
                <div className="max-w-md mx-auto bg-white text-black rounded-lg p-8">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-bold mb-2">Username</label>
                            <input type="text" id="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
                            <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <LoginButton><a href="#">Login</a></LoginButton>
                            <a href="#" className="text-sm text-purple-900 hover:underline">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                            <p>Don't have an account? <a href={links.signup} className="text-purple-900 hover:underline cursor-pointer">Sign Up</a></p>
                        </div>
                    </form>
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

export default Login;
