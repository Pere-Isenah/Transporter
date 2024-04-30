"use client"

import Booking from '@/components/Booking/Booking'
import MapBox from '@/components/MapBox/MapBox'

import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  return (
     <div className='grid md:grid-cols-3'>
        <div className=''>
          <Booking/>
        </div>
        <div className='md:col-span-2
        '>
          <MapBox/>
        </div>
     </div>
    
  )
}