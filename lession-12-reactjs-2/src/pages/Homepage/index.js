import React,{useState,useEffect} from 'react'
import './style.css'
import {URL} from '../../constants/global'
// import { v4 as uuidv4 } from 'uuid'
// import UserFunctionalComponent from '../../components/UserFunctionalComponent'
// import UserClassComponent from '../../components/UserClassComponent'
// import CountClassComponent from '../../components/CountClassComponent'
// import ClockClassComponent from '../../components/ClockClassComponent'
// import PostClassComponent from '../../components/PostClassComponent'
import CounterFuncComponent from '../../components/CounterFuncComponent'
import ClockFuncComponent from '../../components/ClockFuncComp'
import PostFuncComponent from '../../components/PostFuncComponent'
import axios from 'axios'


// export const postsList = [
//     {
//         id: uuidv4(),
//         author: "Vinh",
//         content: "Nghĩ về một điều gì đó ...",
//         isClicked: true,
//         isFocus: true,
//         comments: [
//             { user: "A", comment: "asdasdasdasdasdasd" },
//             { user: "B", comment: "asdasdasdasdasdasdasdasdasdasd" },
//             { user: "C", comment: "huiehkjdzjkjknjHVkjn" }
//         ]
//     }, {
//         id: uuidv4(),
//         author: "Khoa",
//         content: "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
//         isClicked: false,
//         isFocus: false,
//         comments: [
//             { user: "A", comment: "asdasdasdasdasdasd123" },
//             { user: "B", comment: "asdasdasdasdasdasdasdasdasdas123d" },
//             { user: "C", comment: "huiehkjdzjkjk123njHVkjn" }
//         ]
//     }, {
//         id: uuidv4(),
//         author: "BBBBBB",
//         content: "AAAAAAAAAAAAAAAAAAAAAAA",
//         isClicked: false,
//         isFocus: false,
//         comments: [
//             { user: "A", comment: "11111111" },
//             { user: "B", comment: "222223d" },
//             { user: "C", comment: "333331233n" }
//         ]
//     },

// ]
function Homepage (){
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
            <div className="home-page">
                <CounterFuncComponent />
                <ClockFuncComponent /> 

                {data.map((list) => <PostFuncComponent {...list} key={list.id} onClick={()=>handelClickpost(list.id)} />)}
            </div>
        )

}

export default Homepage

//   <UserFunctionalComponent name='Vinh' age={18} gender='male' />
//                 <UserClassComponent name='Vinh' age={20} gender='male' />
//              
//                