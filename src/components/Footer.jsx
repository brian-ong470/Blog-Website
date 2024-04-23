import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className='footer__categories'>
          
          <li><Link to="/posts/categories/Algorithms">Algorithms</Link></li>
          <li><Link to="/posts/categories/Business%20Analytics">Business Analytics</Link></li>
          <li><Link to="/posts/categories/IT">IT</Link></li>
          <li><Link to="/posts/categories/Artificial%20Intelligence">Artificial Intelligence</Link></li>
          <li><Link to="/posts/categories/Cyber%20Security">Cyber Security</Link></li>
          <li><Link to="/posts/categories/Big%20Data">Big Data</Link></li>
          <li><Link to="/posts/categories/Data%20Structure">Data Structure</Link></li>
          <li><Link to="/posts/categories/Software%20Development">Software Development</Link></li>
        </ul>
        <div className='footer__copyright'>
          <small>
            All rights ...
          </small>
        </div>
      </footer>
    </div>
  )
}

export default Footer
