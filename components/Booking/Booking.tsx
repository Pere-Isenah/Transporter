import React from 'react'
import AutoCompleteAddress from "./AutoCompleteAddress"

function Booking() {
  const screenHight=window.innerHeight*0.72;

  return (
    <div className="bg-logo-brown p-2">
    <div>
        <h2 className="font-bold text-lg py-3">Booking</h2>
    </div>
    <div className=" rounded-md p-5 border border-white shadow-sm shadow-black-300">
    <AutoCompleteAddress />
    </div>
    </div>
  )
}

export default Booking;