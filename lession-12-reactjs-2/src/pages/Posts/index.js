import React, { useState } from 'react'
import PostFuncComponent from '../../components/PostFuncComponent'
// import { v4 as uuidv4 } from 'uuid'
// import {postsList} from '../Homepage'
import './style.css'

function Postspage() {
    const [data, setData] = useState([])
    const handelClickpost = (postId) => {
        setData(data => data.map(post => {
            console.log(post.id === postId)
            console.log(post.isClicked,"isClicked",post.author)
            if (post.id === postId) {
              return  {...post,isClicked : !post.isClicked,isFocus:!post.isFocus}
            }
            return post
        }
        ))
    }
    return (
        <div className="Postspage">
            {data.map((post) => <PostFuncComponent key={post.id} onClick={handelClickpost}   {...post} />)}
        </div>
    )
}

export default Postspage