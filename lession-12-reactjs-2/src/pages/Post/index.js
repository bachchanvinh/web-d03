import React, { useState, useEffect } from 'react'
import { URL } from '../../constants/global'
import PostFuncComponent from '../../components/PostFuncComponent'
import { useParams } from 'react-router-dom'
// import { postsList } from '../Homepage'
import './style.css'
import axios from 'axios'

function Postpage() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get(`${URL}/posts/${id}`).then(res => {
            console.log(res.data)
            if (res.data.isSuccess) {
                setPost(res.data.post)
            }
        })
    }, [])

    return (
        <div>
            <PostFuncComponent {...post} />
        </div>
    )
}

export default Postpage