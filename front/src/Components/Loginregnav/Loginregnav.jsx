import React from 'react';
import { BsSpeakerFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Loginregnav = () => {
  return (
    <div>
      <div className="bg-black p-4">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto">
          <a className="flex items-center space-x-3 text-4xl text-white">
            <BsSpeakerFill />
            <span className="self-center text-2xl font-semibold">
              Melody Mart
            </span>
          </a>
          <div className="flex space-x-6 text-white">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/category" className="hover:text-gray-400">Category</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

