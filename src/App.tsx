import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

import './App.css'

function App() {

  return (
    <>
      <Avatar>
        <AvatarImage  />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  )
}

export default App
