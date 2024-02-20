

import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import './App.css'
function App() {


 
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see the SignInButton above this text.</p>
      </SignedOut>
      <SignedIn>
        <h1>Welcome to your app!</h1>
        <p>This content is private. Only signed in users can see the SignOutButton above this text.</p>
      </SignedIn>
    </div>
  )
}
 
export default App






