import React from "react";
import Dodsbo from "./Dodsbo";
import { useState } from "react";
import ButtonCluster from "./ButtonCluster";
import LogIn from "./LogIn";
import Register from "./Register";
import RegisteredScreen from "./RegisteredScreen";
import LogOut from "./LogOut";

const Home = () => {
  const [showLogOutBtn, setShowLogOutBtn] = useState(false);
  const [showBtnCluster, setShowBtnCluster] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showRegisteredScreen, setShowRegisteredScreen] = useState(false);
  const [showDodsbo, setShowDodsbo] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Toggles the Button Cluster
  const toggleBtnCluster = () => setShowBtnCluster(!showBtnCluster);

  // Shows Login form
  const toggleViewLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    toggleBtnCluster();
  };

  // Shows Register form
  const toggleViewRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    toggleBtnCluster();
  };

  // Shows Estates
  const toggleDodsbo = () => {
    setShowDodsbo(!showDodsbo);
    showLoginForm ? setShowLoginForm(false) : null;
    setShowLogOutBtn(!showLogOutBtn);
  };

  const toggleRegisteredScreen = () => {
    setShowRegisterForm(false);
    setShowRegisteredScreen(!showRegisteredScreen);
    showRegisteredScreen ? toggleBtnCluster() : null;
  };

  // Sets the currently logged in user
  const submitCurrentUser = (user) => {
    setCurrentUser(user);
  };

  // Reset page to buttonCluster
  const atLogOut = () => {
    setShowDodsbo(!showDodsbo);
    setShowLogOutBtn(!showLogOutBtn);
    toggleBtnCluster();
    setCurrentUser(null);
  };

  return (
    <div className="container">
      {showLogOutBtn && (
        <div className="log-out-bar">
          <div></div>
          <LogOut onLogOut={atLogOut} />
        </div>
      )}
      <div className="main-div">
        
      <main>
        
        {showBtnCluster && (
          <ButtonCluster
            onToggleViewLoginForm={toggleViewLoginForm}
            onToggleViewRegisterForm={toggleViewRegisterForm}
          />
        )}
        {showLoginForm && (
          <LogIn
            onToggleViewLoginForm={toggleViewLoginForm}
            onToggleViewDodsbo={toggleDodsbo}
            onSubmitUser={submitCurrentUser}
          />
        )}
        {showRegisterForm && (
          <Register
            onToggleViewRegisterForm={toggleViewRegisterForm}
            onToggleViewDodsbo={toggleDodsbo}
            onToggleViewRegisterScreen={toggleRegisteredScreen}
          />
        )}
        {showRegisteredScreen && <RegisteredScreen />}
        {showDodsbo && <Dodsbo currentlyLoggedIn={currentUser} />}
      </main>
      </div>
      <aside class="left-sidebar">
        <div></div>
      </aside>
      <aside class="right-sidebar"></aside>
      <footer>Gruppe 30</footer>
    </div>
  );
};

export default Home;
