"use client"
import { useState } from 'react';

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);

    return(
      <>
     <div className="flex justify-between items-center px-4 md:px-[200px] py-4">
        <img src="navimg.png" className="w-[131px] h-[29px]"></img>
        <div className="hidden md:flex space-x-6 text-[16px]">
          <h1>Features</h1>
          <h1>pricing</h1>
          <h1>Resource</h1>
          <h1>Get Support</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <button>Log in</button>
          <button className="w-26 h-8 bg-[rgba(248,101,23,1)] text-white rounded-full">Start free</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-100 overflow-auto">
          <h1>Features</h1>
          <h1>pricing</h1>
          <h1>Resource</h1>
          <h1>Get Support</h1>
          <button>Log in</button>
          <button className="w-26 h-8 bg-[rgba(248,101,23,1)] text-white rounded-full">Start free</button>
        </div>
      )}
      </>
    )
  }