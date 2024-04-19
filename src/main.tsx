import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
// Supports weights 100-900
import '@fontsource-variable/outfit';
import Booking from "./components/Booking/Booking.tsx";
import MapBox from "./components/MapBox/MapBox.tsx";
 
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App/>
      <div className="grid md:grid-cols-3">
        <div>
          <Booking />
        </div>
        <div className="md:col-span-2">
          <MapBox />
        </div>
      </div>
    </ClerkProvider>
  </React.StrictMode>,
)