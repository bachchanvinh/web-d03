import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SIGN_UP, URL } from '../../constants/global'
import './style.css'
const axios = require('axios').default
const SignUp = () => {
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failture, setFailture] = useState(false)
    const handleSignUp = () => {
        axios.post(`${URL}/users`, {
            email, password
        }).then((res) => {
            if (res.data.isSuccess === true) {
                history.push({ pathname: '/sign-in' })
                // console.log(res.data)
                setFailture(false)
            }
        })
            .catch((err) => {
                setFailture(true)
                console.log(err.message)
            })

    }
    return (
        <div className="sign-up">
            <h2>Sign up</h2>
            <div className="sign-up-form">
                <input placeholder="email?" onChange={(e) => { setEmail(e.target.value); console.log(email) }} />
                <input placeholder="password" type="password" onChange={(e) => { setPassword(e.target.value); console.log(password) }} />
                {failture && <p >Đăng ký không thành công</p>}
                <button onClick={handleSignUp}>{SIGN_UP}</button>
            </div>

        </div>)
}

export default SignUp