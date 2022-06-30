import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import { signUp } from '../Login/Login.jsx';
import { fetchUserId } from '../../reducers/appReducers.js';

import css from './Login.css'
import img from '../../img/hiresmith.png'

export default function LoginPage () {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onClickSignin = (e) => {
    e.preventDefault();
    //console.log(username, password);
    const body = { username, password }
    //dispatch(getUser(body));
    dispatch(fetchUserId(body))
  }
  const userId = useSelector((state) => state.app.user);
  console.log("userId from LogIn page: ",userId)
  // if userId is in: redirect to the '/secret' page


/*
  async function getUser(body) {
    console.log("getUser invoking? ", body);
    try {
      // we want to be able to match both usernames and passwords, 
      // so we'll need to make sure those (or other auth) are both included in response.
      const res = await fetch (`/api/users/${body.username}`, { // placeholder uri
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(body))
      })
      const data = res.json();
      console.log(data);
      // if username and password found in the database, 
      // redirect to homepage with state for username
      // console.log('username or password incorrect')
    } catch (err) {
      console.log(err)
    }
  }
  
 */

  return (
    <div id='login'>
      <img id='logo' src={img}></img>
      <h1>Login Page</h1>
      <div id='hide'>
      {userId && (<Navigate to='/secret' replace={true} />)}
      </div>
      <form id='login-fields'>
        <input type="text" name="username" id='username' 
          value={username}
          onChange={(e)=>setUsername(e.target.value)} placeholder='username' />

        <input type="text" name="password" id='password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button type="submit" onClick={onClickSignin}>Sign in</button>
        {/* <button onClick={<Signup />}>Sign up</button> */}
      </form>
    </div>
  )
}
// send post req to login route that gets established. 
// get cookie, or whatever is determined by middleware on backend. 
// use redux
// after response with user id, useDispatch() to dispatch action that updates user portion of the state. 
// get cookie to fetch request

