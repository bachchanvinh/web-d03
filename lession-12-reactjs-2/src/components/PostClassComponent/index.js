import React from 'react'
import './style.css'

class PostClassComponent extends React.Component {

    shouldComponentUpdate(newProps) {
        if (JSON.stringify(this.props) !== JSON.stringify(newProps)) {
            return true
        }
        return false
    }
    render() {
        const { id, author, content, onClick, isClicked, comments, isFocus } = this.props
        console.log('render', author)
        return (
            <div className={isClicked ? ` post-clicked post` : ` post`} onClick={onClick} >
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