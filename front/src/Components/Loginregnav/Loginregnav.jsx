import React from 'react';
import { BsSpeakerFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import './Loginregnav.css';

export const Loginregnav = () => {


  return (
    <div>
      <div className="bg-black p-6">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 text-4xl text-white">
            <BsSpeakerFill />
            <span className="self-center text-2xl font-semibold">
              Melody Mart
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6 text-white">
            <Link to="/" className="hover:text-gray-400 text-xl">Home</Link>
            <Link to="/category" className="hover:text-gray-400 text-xl">Category</Link>
            <Link to="/" className="hover:text-gray-400 text-xl">Popular</Link>
            <Link to="/contactus" className="hover:text-gray-400 text-xl">Contact</Link>
          </div>

       
          <div className="login">
          {localStorage.getItem('token')
        ?<button onClick={()=>{localStorage.removeItem('token');window.location.replace('/')}}>Logout</button>

        :<Link to='/login'><button>Login</button></Link>}
          </div>

          {/* Cart Icon */}
          <div className="cart">
            <Link to="/cart" className="hover:text-gray-400 text-xl">
              <IoCartOutline style={{ color: 'white', fontSize: '2em' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
