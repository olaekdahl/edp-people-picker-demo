import { useState } from 'react'
import './Register.css';

export const Register = () => {
  const [state, setState] = useState({})
  const [errorMessage, setErrorMessage] = useState()

  return (
    <section className='Register'>
      <h1>Register</h1>
      <div>
        <label>Desired username</label>
        <input value={state.username} onChange={e => setState({ ...state, username: e.target.value })} />
        <label>Password</label>
        <input type="password" value={state.password1} onBlur={e => validate(e.target.value)} />
        <button onClick={register}>Log in</button>

      </div>
      <dialog open={errorMessage}>
        <p>{errorMessage}</p>
        <button onClick={() => setErrorMessage(undefined)}>Okay</button>
      </dialog>
    </section>
  )

  function register() {
    throw "not yet implemented"
  }

  /**
   * 
   * @param {string} password 
   * returns true if it is a secure password. False otherwise.
   */
  function validate(password) {
    if (! /(?=.*\W).{4,}/.test(password)) {
      setErrorMessage("That password isn't secure enough. Try another.")
    } else {
      setState({ ...state, password })
    }
  }
}