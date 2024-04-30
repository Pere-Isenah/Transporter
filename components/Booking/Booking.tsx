import React, { useState, useEffect } from 'react';
import AutoCompleteAddress from "./AutoCompleteAddress";

function Booking() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // Check if window is defined (i.e., if we're in the browser environment)
    if (typeof window !== 'undefined') {
      // Access window.innerHeight to get the screen height
      setScreenHeight(window.innerHeight * 0.72);
    }
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div className="bg-logo-brown p-2">
      <div>
        <h2 className="font-bold text-lg py-3">Booking</h2>
      </div>
      <div className="rounded-md p-5 border border-white shadow-sm shadow-black-300" style={{ height: `${screenHeight}px` }}>
        <AutoCompleteAddress />
      </div>
    </div>
  );
}

export default Booking;
