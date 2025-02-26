import React from 'react'
import { Link } from 'react-router'

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
            {/* <a href="/home">Home</a> || */}
            <Link to="/home">Home</Link>
            <a href="/contact">Contact</a> || 
            <a href="/about">About</a> 
            <ul>
              <li>
                <a href="/contact/c1">Contact1</a>
                <a href="/contact/c2">Contact2</a>
              </li>
            </ul>
            
        </li>
      </ul>
    </div>
  )
}

export default Menu
