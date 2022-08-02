import React, { useRef, useState, useContext } from "react";
import {Link} from 'react-scroll';
import {Route, Link as Link2, useLocation} from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";

import logo from "../../images/logo.png";
import myLogo from "../../images/mylogo.png";

const NavBarItem = ({ title, url, classprops }) => (

  <li className={`mx-4 cursor-pointer ${classprops}`}>
        <a href={url}>{title}</a>
    </li>
);

const Navbar = () => {
  const location = useLocation();
  const  {connectWallet, currentAccount } = useContext(TransactionContext);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [navbar,setNavbar] = React.useState(false);

  

  const changeBg = () => {
    if(window.scrollY >= 120 || location.pathname!='/'){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }

  }
  window.addEventListener('scroll', changeBg)


  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  return (
    <nav className={ navbar ? "navbar active w-full fixed flex md:justify-center justify-between items-center p-4 " : "w-full navbarpre fixed flex md:justify-center justify-between items-center p-4"}>
      <div className="md:flex-[0.8] flex-initial justify-center items-center">
        <Link to="main" spy={true} smooth={true} offset={-80} duration={500}>
          <Link2 to='/'>
            <img src={myLogo} alt="logo" className="w-48 cursor-pointer" />
          </Link2>   
        </Link>
        
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center font-manrope flex-initial ml-20">

        <li className="mx-4 cursor-pointer hover-underline-animation">
          <a href={"https://coinmarketcap.com"} target="_blank">Market</a>
        </li>

        <li className="mx-4 cursor-pointer hover-underline-animation">
          <Link to="welcome" spy={true} smooth={true} offset={-50} duration={500}>
            <Link2 to='/'>Exchange</Link2>
          </Link>
        </li>

        <li className="mx-4 cursor-pointer hover-underline-animation">
        <Link to="transactions" spy={true} smooth={true} offset={-80} duration={500}>
          <Link2 to='/transactions'>Transactions</Link2>
          </Link>
        </li>

        <li className="mx-4 cursor-pointer hover-underline-animation">
          <Link to="wallet" spy={true} smooth={true} offset={-80} duration={500}>
            <Link2 to='/wallet'>Wallet</Link2>
          </Link>
        </li>

        {!currentAccount && (
          <li className="button-28 cursor-pointer ml-20 "onClick={connectWallet}>
          <p className="font-semibold">Login</p>
          </li>
        )
        }

        

      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
              <div className="flex flex-col">
                <li className="mx-4 cursor-pointer ">
                  <a href={"https://coinmarketcap.com"} target="_blank">Market</a>
                </li>

                <li className="mx-4 cursor-pointer  mt-3">
                  <Link to="welcome" spy={true} smooth={true} offset={-50} duration={500}>
                    <Link2 to='/'>Exchange</Link2>
                  </Link>
                </li>

                <li className="mx-4 cursor-pointer  mt-3">
                <Link to="transactions" spy={true} smooth={true} offset={-80} duration={500}>
                  <Link2 to='/transactions'>Transactions</Link2>
                  </Link>
                </li>

                <li className="mx-4 cursor-pointer  mt-3">
                  <Link to="wallet" spy={true} smooth={true} offset={-80} duration={500}>
                    <Link2 to='/wallet'>Wallet</Link2>
                  </Link>
                </li>
            </div>
          </ul>
        )}
      </div>
    </nav>

    
    

  );

    

};

export default Navbar;