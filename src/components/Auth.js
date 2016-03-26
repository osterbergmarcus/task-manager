import React, { Component } from 'react'

const Auth = ({ login, logout, username, uid }) => {
  return (
    <div>
     <h2>HeReYoUcAn SignIn!</h2>
     <button onClick={() => login()}>Sign in</button>
     <button onClick={() => logout()}>Sign out</button>
    </div>
  )
}

export default Auth