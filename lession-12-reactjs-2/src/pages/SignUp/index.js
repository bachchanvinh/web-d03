import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { SIGN_IN, SIGN_UP } from '../../constants/global'
import './style.css'

const SignUp = () => {
    let history= useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignUp = () => {
        history.push({pathname:'/sign-in'})
    }
    return (
        <div className="sign-up">
            <h2>Sign up</h2>
            <div className="sign-up-form">
                <input placeholder="email?" onChange={(e) => { setEmail(e.target.value); console.log(email) }} />
                <input placeholder="password" type="password" onChange={(e) => { setPassword(e.target.value); console.log(password) }} />
                <button onClick={handleSignUp}>{SIGN_UP}</button>
            </div>

        </div>)
}

export default SignUp