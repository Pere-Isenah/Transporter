import React from 'react'
import { AddressAutofill } from '@mapbox/search-js-react';


const AutoCompleteAddress = () => {
  return (
    <>
      <div className=' w-full py-3 px-2'>
    <label className="text-sm">Where from?</label>
    <AddressAutofill accessToken="pk.eyJ1IjoicGpzaW1wc29uIiwiYSI6ImNsdjZ1ZG9xZzAyOWEyaW81OHdoZ2VpcnAifQ.X44UU75dQ9IteNfJa_Va5g">
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