import React, { useState } from 'react'
import PostFuncComponent from '../../components/PostFuncComponent'
import { v4 as uuidv4 } from 'uuid'

import './style.css'
const postsList = [
    {
        id: uuidv4(),
        author: "Vinh",
        content: "Nghĩ về một điều gì đó ...",
        isClicked: true,
        isFocus: true,
        comments: [
            { user: "A", comment: "asdasdasdasdasdasd" },
            { user: "B", comment: "asdasdasdasdasdasdasdasdasdasd" },
            { user: "C", comment: "huiehkjdzjkjknjHVkjn" }
        ]
    }, {
        id: uuidv4(),
        author: "Khoa",
        content: "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
        isClicked: false,
        isFocus: false,
        comments: [
            { user: "A", comment: "asdasdasdasdasdasd123" },
            { user: "B", comment: "asdasdasdasdasdasdasdasdasdas123d" },
            { user: "C", comment: "huiehkjdzjkjk123njHVkjn" }
        ]
    }, {
        id: uuidv4(),
        author: "BBBBBB",
        content: "AAAAAAAAAAAAAAAAAAAAAAA",
        isClicked: false,
        isFocus: false,
        comments: [
            { user: "A", comment: "11111111" },
            { user: "B", comment: "222223d" },
            { user: "C", comment: "333331233n" }
        ]
    },

]
function Postspage() {
    const [data, setData] = useState(postsList)
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