import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../images/M.png'

function NavBar() {
  return (
    <nav className='navbar'>
        <div className='two-ul'>
            <ul className='navbar-list'>
                <li>
                    <Link style={{textDecoration:'none'}} to='/Home'>Home</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to='/List'>List</Link>
                </li>
                <li>
                    <Link style={{textDecoration:'none'}} to='/Login'>Login</Link>
                </li>
            </ul>
            <ul className='navbar-list2'>
                <li>
                    <img src={logo} alt='logo'/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar


//3C486B
//F0F0F0
//F9D949
//F45050