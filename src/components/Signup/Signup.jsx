import React from ('React');
import { Redirect } from ('react-router-dom')
import { useDispatch } from 'react-redux'

export default function Signup () {
  const dispatch = useDispatch();
  // how to get id to persist through multiple sessions
  // need to check that all users are unique. will sql throw an error if info is redundant.
  // need to fetch userid here too and then add next user at next id. 

  // async function createNewUser({newUsername, newPw}) {
  //   const body = {};
  //   // append the contents of username and password fields to body
  //   body.newUsername;
  //   body.newPw;
  //   // try to post to users table in database. 
  //   try {
  //     await fetch('/api/users/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: (JSON.stringify(body))
  //     });
  //     // set the state from reducer. 
  //     dispatch(createNewUser(body));
  //     // if response body includes username, render text which 
  //     // says username is already taken.
      
  //     // if there's a match, redirect to main page plus whatever is returned from dispatch
  //     // how to redirect to what is in state. uri 
  //     {<Redirect to='/secret/:username}'/>};
  //   } catch (err) {
  //     console.log(err)
  //   } 
  // } 

  return (
    <div>
      <input id='new-username' placeholder='New Username'></input>
      <input id='new-password' placeholder='New Password'></input>
      {/* do we put props for createNewUser here? */}
      <button onClick={createNewUser}>Submit</button>
    </div>
  )
}