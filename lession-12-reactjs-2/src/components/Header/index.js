import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

import {SIGN_IN,SIGN_UP,HOME} from '../../constants/global'
class Header extends React.Component {
    render (){
        return (
            <div className="header">
                <p className="header-label"> Header</p>
                <ul className="nav-header">
                    <li ><NavLink to ="/home" className="header-link" activeClassName="header-link--active">{HOME}</NavLink></li>
                    <li ><NavLink to ="/sign-in" className="header-link" activeClassName="header-link--active">{SIGN_IN}</NavLink></li>
                    <li ><NavLink to ="/sign-up" className="header-link" activeClassName="header-link--active">{SIGN_UP}</NavLink></li>
                    <li ><NavLink to ="/posts" className="header-link" activeClassName="header-link--active">Bài viết</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Header