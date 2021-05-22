import React, { useState } from 'react'
import { SIGN_IN, SIGN_UP, URL } from '../../constants/global'
import { useHistory } from 'react-router-dom'
import './style.css'
import axios from 'axios'


const SignIn = () => {
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failture, setFailture] = useState(false)
    const handleSignIn = () => {
        axios.post(`${URL}/users`, {
            email, password
        }).then((res) => {
            if (res.data.isSuccess === true) {
                history.push({ pathname: '/home' })
                setFailture(false)
            }
        })
            .catch((err) => {
                setFailture(true)
                console.log(err.message)
            })
    }
    const handleSignUp = () => {
        history.push({ pathname: '/sign-up' })
    }
    return (
        <div className="sign-in">
            <h2>Sign in</h2>
            <div className="sign-in-form">
                <input placeholder="email?" onChange={(e) => { setEmail(e.target.value); console.log(email) }} />
                <input placeholder="password" type="password" onChange={(e) => { setPassword(e.target.value); console.log(password) }} />
                {failture && <p >Đăng nhập không thành công</p>}
                <button onClick={handleSignIn}>{SIGN_IN}</button>
                <button onClick={handleSignUp}>{SIGN_UP}</button>
            </div>

        </div>)
}

export default SignIn