import React from 'react'
import './style.css'
import { v4 as uuidv4 } from 'uuid'
// import UserFunctionalComponent from '../../components/UserFunctionalComponent'
// import UserClassComponent from '../../components/UserClassComponent'
// import CountClassComponent from '../../components/CountClassComponent'
import ClockClassComponent from '../../components/ClockClassComponent'
import PostClassComponent from '../../components/PostClassComponent'


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

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: postsList
        }
    }
    componentDidMount() {
        console.log(this.state.posts[2].id)
    }
    handelClickpost(id) {
        // console.log(id)
        let data = this.state.posts
        let indx = data.indexOf(data.find(ele => ele.id === id))
        data[indx].isClicked = !data[indx].isClicked
        // for (let i = 0; i < data.length; i++) { data[i].isFocus = false }// Dong cmt cua cac bai viet khac
        data[indx].isFocus = !data[indx].isFocus
        this.setState(state=>({posts:data}))
        // this.setState({ posts: data })
        // console.log(this.state.posts)
    }
    render() {
        return (
            <div className="home-page">
                <ClockClassComponent /> 
                {this.state.posts.map((list) => <PostClassComponent {...list} key={list.id} onClick={() => this.handelClickpost(list.id)} />)}
            </div>
        )
    }
}

export default Homepage

//   <UserFunctionalComponent name='Vinh' age={18} gender='male' />
//                 <UserClassComponent name='Vinh' age={20} gender='male' />
//                 <CountClassComponent />
//                