import React from 'react'
import { AddressAutofill } from '@mapbox/search-js-react';


const AutoCompleteAddress = () => {
  const mapKey =process.env.MAP_BOX_TOKEN
  return (
    <>
      <div className=' w-full py-3 px-2'>
    <label className="text-sm">Where from?</label>
    <AddressAutofill accessToken={mapKey}>
      <input className='border rounded-md outline-none p-3 w-full text-black shadow focus:border-black border text-sm' autoComplete="address-line1"/>
    </AddressAutofill>
    </div>
    <div className=' w-full py-3 px-2'>
    <label className="text-sm">Where To?</label>
      <input className='border rounded-md outline-none p-3 w-full text-black shadow focus:border-black border text-sm'/>
    </div>
    </>
  )
}

export default AutoCompleteAddress