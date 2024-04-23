import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [userData, setUserData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
  const changeInputHandle=(e) =>{
    setUserData(prevState =>{
      return{...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className='register'>
      <div className='container'>
        <h2>Sign Up</h2>
        <form className="form register__form">
          <p className='form__error-message'>Please fill up all </p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandle} autoFocus/>
          <input type="text" placeholder='Email' name='mail' value={userData.mail} onChange={changeInputHandle} />
          <input type="text" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandle} />
          <input type="text" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandle}/>
          <button type="submit" className='btn primary'>Register</button>
        </form>
        <small>Already have account? <Link to={"/login"}>Sign in</Link></small>
      </div>
    </section>
  )
}

export default Register
