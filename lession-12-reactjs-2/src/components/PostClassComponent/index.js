import React from 'react'
import './style.css'

class PostClassComponent extends React.Component {

    shouldComponentUpdate(newProps) {
        // console.log()
        // console.log(newProps,"new")
        // console.log(this.props,"old")
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            // this.setState((props)=>({ data:props }))
            return true
        }
        return false
    }
    render() {
        const { id, author, content, onClick, isClicked, comments, isFocus } = this.props
        console.log('render', author)
        return (
            <div className={isClicked ? `${id} post-clicked  post-main` : `${id} post  post-main`} onClick={onClick} >
                <h3>{author}</h3>
                <p>{content}</p>
                {isFocus && <div>
                    <p>Coment:</p>
                    <ul>
                        {comments.map((com, ind) => <li key={ind}><strong>{com.user}:</strong> {com.comment}</li>)}
                    </ul></div>}
            </div>
        )
    }
}

export default PostClassComponent