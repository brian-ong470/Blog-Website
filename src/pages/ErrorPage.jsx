import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='center'>
        <Link to='/' classname="btn primary">Click to Start your Journey</Link>
        <h2>Welcome to My Blog Websited</h2>
        <h4>All copyrights belongs to Brian Ong</h4>
      </div>
    </section>
  )
}

export default ErrorPage
