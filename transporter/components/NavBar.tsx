import React from 'react'
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <>
    <div className="flex gap-6 justify-between px-5 py-3 border-b-[1px] shadow-sm">
      <div>NavBar</div>
  
      <div className="hidden md:flex">
        <ul className="flex gap-6">
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Home</li>
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">History</li>
          <li className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">Help</li>
        </ul>
      </div>
        <UserButton />
    </div>
    </>
    
  )
}

export default NavBar