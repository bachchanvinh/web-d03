import React, { useState, useEffect } from 'react'

import PostFuncComponent from '../../components/PostFuncComponent'
import { useParams } from 'react-router-dom'
// import { postsList } from '../Homepage'
import './style.css'

function Postpage() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {
        const postRender = postsList.find(post => post.id.toString() === id)

        if (postRender) { setPost(post => postRender) }
        console.log(postsList[0].id,id)
    })

    return (
        <div>
            <PostFuncComponent {...post} />
        </div>
    )
}

export default Postpage