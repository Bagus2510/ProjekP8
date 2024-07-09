import React from 'react';
import Button from '../elements/NavbarButton';
import LoginButton from '../elements/LoginButon';
import BanggaLogo from '../img/BANGGA.png';
import GameSelectionIcon from '../elements/ElementsHome/Icon/GameSelectionIcon';
import ExclusivePromotionIcon from '../elements/ElementsHome/Icon/ExclusivePromotionIcon';
import InstantDeliveryIcon from '../elements/ElementsHome/Icon/InstantDeliveryIcon';
import SecureTransactionIcon from '../elements/ElementsHome/Icon/SecureTransactionIcon';
import TestimonialsCards from '../elements/ElementsHome/TestimonialsCards';

function Home() {
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
            <LoginButton bg="green"><a href={links.login}>Login</a></LoginButton>
          </div>
        </nav>
      </div>
      <div className='bg-gradient-to-b from-purple-700 via-purple-500 to-purple-300 pt-20'>
        <div className="p-10 md:p-20 lg:p-40 text-white flex flex-col gap-5 items-center justify-center">
          <img src={BanggaLogo} alt="Bangga Logo" className="animate-slidein300 w-20 md:w-24 lg:w-32 bg-white shadow-purple-200 shadow-md rounded-md" />
          <h1 className="text-2xl md:text-3xl font-bold -mb-5 text-center animate-slidein500">Welcome to</h1>
          <h1 className="text-2xl md:text-3xl font-bold text-center animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">BANGGA TOP UP GAME SHOP</h1>
        </div>
        <div className="flex flex-col p-10 md:p-14 mt-10 bg-gradient-to-r from-amber-400 via-amber-200 rounded-full to-amber-50 mx-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-3 ">Description</h1>
          <p className="text-center font-semibold px-4 md:px-10">
            BANGGA is your ultimate destination for all your gaming needs. We offer a wide range of game vouchers and in-game currencies at unbeatable prices. Whether you're a fan of Free Fire, Mobile Legends, or PUBG Mobile, we've got you covered. Enjoy seamless transactions, instant delivery, and exclusive promotions that make your gaming experience even more exciting.
            Our platform is designed with gamers in mind, providing a user-friendly interface that makes purchasing game credits quick and easy. At BANGGA, we understand the importance of staying ahead in your favorite games, and that's why we offer the best deals and discounts on the market.
            Customer satisfaction is our top priority. Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have. Whether you need help with a transaction or advice on the best deals, we're here to help. 🎮
          </p>
        </div>
        <div className="p-10 md:p-20">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-7">Benefits</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-green-200 rounded-lg">
                <GameSelectionIcon />
              </div>
              <h2 className="text-lg font-bold mt-4">Hide Game Selection</h2>
              <p className="text-center">Choose from a vast array of games and in-game currencies to top up, ensuring you get what you need for your favorite titles.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-green-200 rounded-lg">
                <SecureTransactionIcon />
              </div>
              <h2 className="text-lg font-bold mt-4">Secure Transaction</h2>
              <p className="text-center">Our platform uses top-notch security measures to ensure your transactions are safe and your personal information is protected.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-green-200 rounded-lg">
                <ExclusivePromotionIcon />
              </div>
              <h2 className="text-lg font-bold mt-4">Exclusive Promotion</h2>
              <p className="text-center">Benefit from exclusive promotions and discounts that make your gaming experience more affordable and rewarding.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-green-200 rounded-lg">
                <InstantDeliveryIcon />
              </div>
              <h2 className="text-lg font-bold mt-4">Instant Delivery</h2>
              <p className="text-center">Enjoy instant delivery of game credits and vouchers right after your purchase, so you can get back to gaming without delay.</p>
            </div>
          </div>
        </div>
        <div className="p-10 md:p-20">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-7">Testimonials</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TestimonialsCards bg="white">
              <div>
                <p className="text-gray-800 text-center">"This site is amazing! Topping up my game account was quick and easy. Highly recommend!"</p>
                <p className="text-gray-600 text-center mt-3">- Udin</p>
              </div>
            </TestimonialsCards>
            <TestimonialsCards bg="white">
              <div>
                <p className="text-gray-800 text-center">"Great service and fast transactions. My go-to for game top-ups!"</p>
                <p className="text-gray-600 text-center mt-3">- Joni</p>
              </div>
            </TestimonialsCards>
            <TestimonialsCards bg="white">
              <div>
                <p className="text-gray-800 text-center">"I've used this website multiple times and never had an issue. Excellent support and easy to use."</p>
                <p className="text-gray-600 text-center mt-3">- Daus</p>
              </div>
            </TestimonialsCards>
          </div>
        </div>
        <div className="p-10 md:p-20 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Level Up?</h2>
          <p className="mb-6">Join BANGGA today and get the best deals on game credits and vouchers!</p>
          <a href="/signup" className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">Sign Up Now</a>
        </div>
        <div className="p-10 md:p-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-7">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Q: How do I purchase game credits?</h3>
              <p className="text-gray-800">A: You can purchase game credits by selecting your desired game and amount, then proceeding to checkout. We offer multiple payment methods for your convenience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Q: What payment methods do you accept?</h3>
              <p className="text-gray-800">A: We accept a variety of payment methods including dana and gopay.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">Q: How quickly will I receive my game credits?</h3>
              <p className="text-gray-800">A: Game credits are delivered instantly after your purchase is confirmed.</p>
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
}

export default Home;
