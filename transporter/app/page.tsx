import Booking from "@/components/Booking/Booking";
import MapBox from "@/components/MapBox/MapBox";

 
export default function Home() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 px-5 py-3 border-b-[1px] shadow-sm">
        <div>
          <Booking />
        </div>
        <div className="grid-span-2 bg-blue-500">
          <MapBox />
        </div>
      </div>
      
    </div>

  )
}