import React, { useState } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
// import OverlayContainer from './Components/OverLayContainer';

function App() {

  const [toggleOverlay, setToggleOverlay] = useState(true)

  function handleClickUp() {
    setToggleOverlay(false);
  }

  function handleClickIn(){
    setToggleOverlay(true);
  }

  return (
    <>
      <div className={`container ${!toggleOverlay ? "right-panel-active": ""}`}>
        <RegisterForm signinIn={toggleOverlay} />
        <LoginForm signinIn={toggleOverlay} />

        <div className="overlay_container">
          <div className="overlay">
            <div className="overlay_left">
              <h2>Welcome Back</h2>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={handleClickIn} className='btn_overlay' id='signIn'>Sign In</button>
            </div>
            <div className="overlay_right">
              <h2>Hello, Friend</h2>
              <p>Enter your personal details and start journey personal info</p>
              <button onClick={handleClickUp} className='btn_overlay' id='signUp'>Sign Up</button>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
