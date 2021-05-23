import React, { useState,useEffect } from 'react'
import {URL}from '../../constants/global'
import PostFuncComponent from '../../components/PostFuncComponent'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'
// import {postsList} from '../Homepage'
import './style.css'

function Postspage() {
    const [data, setData] = useState([])
    const handelClickpost = (postId) => {
        setData(data => data.map(post => {
            console.log('Vinh kakak')
            console.log(post.isClicked,"isClicked",post.author)
            if (post.id === postId) {
              return  {...post,isClicked : !post.isClicked,isFocus:!post.isFocus}
            }
            return post
        }
        ))
    }
    useEffect(()=>{
        axios.get(`${URL}/posts`).then((res)=>{
            if(res.data.isSuccess === true){
                setData(res.data.posts)
            }
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div className="Postspage">
            {data.map((post) => <PostFuncComponent key={post.id} onClick={handelClickpost}   {...post} />)}
        </div>
    )
}

export default Postspage