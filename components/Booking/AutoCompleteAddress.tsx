import React, { useState } from 'react';


const AutoCompleteAddress = () => {

  return (
    <>
      <div className=' w-full py-3 px-2'>
        <label className="text-sm">Where from?</label>
          <input
            className='border rounded-md outline-none p-3 w-full text-black shadow focus:border-black border text-sm'/>
      </div>
      <div className=' w-full py-3 px-2'>
        <label className="text-sm">Where To?</label>
        <input
          className='border rounded-md outline-none p-3 w-full text-black shadow focus:border-black border text-sm'
        />
      </div>
    </>
  );
};

export default AutoCompleteAddress;