import React from 'react';
import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
  return (
  <>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h1>Login</h1>
        <LoginForm/>
      </div>
      <div class="col-sm">
      <h1>Sign Up</h1>
        <SignUpForm/>
      </div>
    </div>

  </div>
  </>
  )
  ;
}
