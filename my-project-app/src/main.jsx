import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Games from './components/pages/Games'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Promo from './components/pages/Promo'
import MobileLegends from './components/pages/MobileLegends'
import Construction from './components/pages/Construction'
import EaFc from './components/pages/EaFc'
import FreeFire from './components/pages/FreeFire'
import ClashOfClans from './components/pages/ClashOfClans'
import PubgMobile from './components/pages/PubgMobile'
import BrawlStars from './components/pages/BrawlStars'

const BrowserRouter  = createBrowserRouter([
  {
    path: '/',
    element: <Home />},
  {
    path: '/games',
    element: <Games />},
  {
    path: '/login',
    element: <Login />},
  {
    path: '/signup',
    element: <SignUp />},
  {
    path: '/promo',
    element: <Promo />},
  {
    path: '/ml',
    element: <MobileLegends />},
  {
    path: '/cs',
    element: <Construction />},
  {
    path: '/eafc',
    element: <EaFc />},
  {
    path: '/freefire',
    element: <FreeFire />},
  {
    path: '/coc',
    element: <ClashOfClans />},
  {
    path: '/pubgm',
    element: <PubgMobile />},
  {
    path: '/brawlstars',
    element: <BrawlStars />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}/>
  </React.StrictMode>,
)
