import { UserButton } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
 
export default function Home() {
  return (
    <div className="h-screen">
      <NavBar/>
      <UserButton />
      <h2 className="text-white">testing</h2>

    </div>

  )
}