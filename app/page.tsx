"use client"

import Booking from '@/components/Booking/Booking'
import MapboxMap from '@/components/Map/MapBoxMap'

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
          <MapboxMap/>
        </div>
     </div>
    
  )
}