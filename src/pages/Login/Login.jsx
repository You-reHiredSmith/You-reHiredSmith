import React from 'react';

export default function Login () {
  return (
    <div id='login'>
      <h1>Login Page</h1>
      <div>
        <input id='username' placeholder='username'></input>
        <input id='password' placeholder='password'></input>
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </div>
  )
}