import React from 'react';
import '../App.css';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import '../components/Signup.css';

export default function SignUp() {
  return (
    <>
      <div className="container" style={{display:'block', alignItems: 'center'}}>
        <div className="row">
          <div className="column">
            <div className="card" st>
              <h1>Login</h1>
              <LoginForm />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <h1>Sign Up</h1>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
    ;
}
