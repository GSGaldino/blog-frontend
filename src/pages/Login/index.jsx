import React from 'react';

export default function Login(){
  function handleLogin(event){
    event.preventDefault();
    alert("Login feito!")
  }
  return (
    <div>
      <form onSubmit={(event) => handleLogin(event)}>
        <input type="submit" value="submeter"/>
      </form>
    </div>
  )
}
