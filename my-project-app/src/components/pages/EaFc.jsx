import React, { useState } from 'react';
import Button from '../elements/NavbarButton';
import LoginButton from '../elements/LoginButon'; // Corrected import name
import BanggaLogo from '../img/BANGGA.png';

function EaFc() {
    const links = {
        home: '/',
        games: '/games',
        promo: '/promo',
        login: '/login',
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [email, setEmail] = useState('');
    const [isPurchased, setIsPurchased] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const categories = [
        {
            name: 'FC Points',
            items: [
                { id: 1, name: '41 FC POINTS', price: 'Rp. 6.000' },
                { id: 2, name: '101 FC POINTS', price: 'Rp. 15.000' },
                { id: 3, name: '521 FC POINTS', price: 'Rp. 72.000' },
                { id: 4, name: '1071 FC POINTS', price: 'Rp. 145.000' },
                { id: 5, name: '2201 FC POINTS', price: 'Rp. 297.000' },
                { id: 6, name: '5751 FC POINTS', price: 'Rp. 720.000' },
                { id: 7, name: '12600 FC POINTS', price: 'Rp. 1.441.000' }
            ]
        },
    ];

    const paymentMethods = [
        { id: 1, name: 'Dana' },
        { id: 2, name: 'GoPay' }
    ];

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category);
            setSelectedItem(null);
        }
    };

    const handleItemClick = (itemId) => {
        setSelectedItem(prevItem => prevItem === itemId ? null : itemId);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBuyNow = () => {
        setIsPurchased(true);
    };

    const handlePaymentClick = (paymentId) => {
        if (selectedPayment === paymentId) {
            setSelectedPayment(null);
        } else {
            setSelectedPayment(paymentId);
        }
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
            <div className="bg-purple-700 text-white pt-28 pb-20">
                <div className="container mx-auto max-w-lg bg-white text-black rounded-lg p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center">
                        <span className="bg-purple-700 text-white p-2 rounded-full mr-2">1</span>
                        Enter Your UID
                    </h2>
                    <input
                        type="text"
                        placeholder="Enter UID"
                        className="w-full p-2 border-2 border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 mb-4"
                    />
                    <p className="text-sm text-gray-600 text-justify">
                        To find your UID, open the FC Mobile app, click the settings button, and copy the UID shown in the upper right corner.
                    </p>
                </div>
                <div className="container mx-auto max-w-lg bg-white text-black rounded-lg p-8 shadow-lg mt-8">
                    <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center">
                        <span className="bg-purple-700 text-white p-2 rounded-full mr-2">2</span>
                        Select the Top Up Nominal
                    </h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Select a Category</h3>
                        <div className="flex space-x-4">
                            <button
                                className={`p-4 border-2 rounded-md ${selectedCategory === 'FC Points' ? 'bg-purple-500 text-white' : 'border-purple-700'}`}
                                onClick={() => handleCategoryClick('FC Points')}
                            >
                                FC Points
                            </button>
                        </div>
                    </div>
                    {selectedCategory && (
                        <div className="flex flex-col mb-4">
                            <h3 className="text-xl font-bold mb-2">Select Item</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {categories.find(category => category.name === selectedCategory).items.map(item => (
                                    <div
                                        key={item.id}
                                        className={`p-4 border-2 rounded-md cursor-pointer ${selectedItem === item.id ? 'bg-purple-500 text-white' : 'border-purple-700 hover:bg-purple-100'}`}
                                        onClick={() => handleItemClick(item.id)}
                                    >
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="container mx-auto max-w-lg bg-white text-black rounded-lg p-8 shadow-lg mt-8">
                    <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center">
                        <span className="bg-purple-700 text-white p-2 rounded-full mr-2">3</span>
                        Select Payment
                    </h2>
                    <div className="flex flex-col mb-4">
                        <div className="grid grid-cols-2 gap-4">
                            {paymentMethods.map(payment => (
                                <div
                                    key={payment.id}
                                    className={`p-4 border-2 rounded-md cursor-pointer ${selectedPayment === payment.id ? 'bg-purple-500 text-white' : 'border-purple-700 hover:bg-purple-100'}`}
                                    onClick={() => handlePaymentClick(payment.id)}
                                >
                                    <p>{payment.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-lg bg-white text-black rounded-lg p-8 shadow-lg mt-8">
                    <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center">
                        <span className="bg-purple-700 text-white p-2 rounded-full mr-2">4</span>
                        Buy
                    </h2>
                    <div className="flex flex-col mb-4">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full p-2 border-2 border-purple-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button
                            className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
                        {isPurchased && (
                            <p className="mt-4 text-green-600">Purchase successful! Details have been sent to {email}.</p>
                        )}
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
    )
}

export default EaFc;
