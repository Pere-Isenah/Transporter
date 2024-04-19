import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import NavBar from "./components/NavBar";
 
export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <NavBar />
      </SignedIn>
    </header>
  )
}