import React from "react";
import {Link} from 'react-scroll';
import {Route, Link as Link2, useLocation} from 'react-router-dom';

import logo from "../../images/mylogo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col pb-4 bg-gray-500">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 ">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-44"/>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full font-manrope font-semibold text-black ">
        <a className=" text-base text-center mx-2 cursor-pointer hover:text-white" href={"https://coinmarketcap.com"} target="_blank">Market</a>


        <div className="mx-4 cursor-pointer hover:text-white">
          <Link to="welcome" spy={true} smooth={true} offset={-50} duration={500}>
            <Link2 to='/'>Exchange</Link2>
          </Link>
        </div>

        <div className="mx-4 cursor-pointer hover:text-white">
          <Link to="transactions" spy={true} smooth={true} offset={-50} duration={500}>
            <Link2 to='/transactions'>Transactions</Link2>
          </Link>
        </div>

        <div className="mx-4 cursor-pointer hover:text-white">
          <Link to="wallets" spy={true} smooth={true} offset={-50} duration={500}>
            <Link2 to='/wallet'>Wallet</Link2>
          </Link>
        </div>
      </div>
    </div>

    <p className="w-full h-full font-manrope flex justify-center pr-10 pt-5">
            Developed by Haris Ahmed
            </p>
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
      
  </div>
);

export default Footer;