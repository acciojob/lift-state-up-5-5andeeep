
import React from "react";
import './../styles/App.css';
import Login from "./Login";
import { useState } from "react";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin(userName, userPassword){
    if(userName!=="" && userPassword!==""){
      setIsLoggedIn(true)
    }
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {
          isLoggedIn? (<p>You are logged in!</p>) : ( <Login onLogin={handleLogin} />)
        }
    </div>
  )
}

export default App
