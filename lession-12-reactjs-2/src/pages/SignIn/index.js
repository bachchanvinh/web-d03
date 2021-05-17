import React, { useState } from 'react'
import { SIGN_IN, SIGN_UP } from '../../constants/global'
import {useHistory} from 'react-router-dom'
import './style.css'

const SignIn = () => {
    let history= useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignIn = () => {
       history.push({pathname:'/home'})
    }
    const handleSignUp=()=>{
        history.push({pathname:'/sign-up'})
    }
    return (
        <div className="sign-in">
            <h2>Sign in</h2>
            <div className="sign-in-form">
                <input placeholder="email?" onChange={(e) => { setEmail(e.target.value); console.log(email) }} />
                <input placeholder="password" type="password" onChange={(e) => { setPassword(e.target.value); console.log(password) }} />
                <button onClick={handleSignIn}>{SIGN_IN}</button>
                <button onClick={handleSignUp}>{SIGN_UP}</button>
            </div>

        </div>)
}

export default SignIn