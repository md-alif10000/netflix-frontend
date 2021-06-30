import React, { useState, useRef } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
          <button className="loginButton">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies,TV shows and more</h1>
        <h2>Watch anywhere,cancel anytime</h2>
        <p>
          Ready to watch ? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input type="email" ref={emailRef} placeholder="email address" />
            <button onClick={handleStart} className="registerB utton">
              Get started
            </button>
          </div>
        ) : (
          <form className="input" onClick={handleFinish}>
            <input type="password" ref={passwordRef} placeholder="password" />
            <button
              type="submit"
              onClick={handleFinish}
              className="registerButton"
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
