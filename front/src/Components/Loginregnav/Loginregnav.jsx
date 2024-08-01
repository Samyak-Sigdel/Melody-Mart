import React from 'react'
import { BsSpeakerFill } from "react-icons/bs";

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
        </div>
    </div>
</div>


  )
}
