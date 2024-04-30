import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Logo from "../assets/Logo.png"
import Image from "next/image"

function NavBar() {
  return (
    <>
    <div className="flex gap-6 justify-between px-5 py-3 border-b-[1px] shadow-sm items-center ml-0 pl-0 pb-3 border-logo-cyan shadow-logo-cyan ">
      <div className="w-26 h-12 ">
        <Image src='/Logo.png' alt='logo' width={200} height={65} className="object-fill ml-0 pl-0 md:object-fit w-26 h-14"/>
      </div>
  
      <div className="hidden md:flex">
        <ul className="flex gap-6">
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Home</li>
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">History</li>
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Help</li>
        </ul>
      </div>
        <UserButton afterSignOutUrl="/" />
    </div>
    </>
    
  )
}

export default NavBar