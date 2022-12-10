import React from "react";
import {Link, NavLink} from 'react-router-dom';

function Menu() {
    return (
        <nav>
          <ul>
            {/* <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li> */}

            <li>
              <NavLink
                style={({isActive}) => ({
                    color: isActive ? 'red' : 'blue',
                })} 
                to='/'
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                style={({isActive}) => ({
                    color: isActive ? 'red' : 'blue',
                })} 
                to='/blog'
              >Blog</NavLink>
            </li>
            <li>
              <NavLink
                style={({isActive}) => ({
                    color: isActive ? 'red' : 'blue',
                })} 
                to='/profile'
              >Profile</NavLink>
            </li>
            <li>
              <NavLink
                style={({isActive}) => ({
                    color: isActive ? 'red' : 'blue',
                })} 
                to='/login'
              >Login</NavLink>
            </li>
            <li>
              <NavLink
                style={({isActive}) => ({
                    color: isActive ? 'red' : 'blue',
                })} 
                to='/logout'
              >Logout</NavLink>
            </li>

          </ul>
        </nav>
    )
}

export {Menu};