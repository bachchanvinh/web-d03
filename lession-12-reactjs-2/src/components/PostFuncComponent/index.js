import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function PostFuncComponent(props) {

    const { author, content, onClick, isClicked, comments, isFocus, _id } = props
    console.log('render', author, _id)
    return (
        <Link className="post-link" to={`/post/${_id}`} onClick={() => onClick(_id)}>
            <div className={isClicked ? ` post-clicked post` : ` post`}  >
                <h3>{author}</h3>
                <p>{content}</p>
                {isFocus && <div>
                    <p>Coment:</p>
                    <ul>
                        {comments.map((com, ind) => <li key={ind}><strong>{com.user}:</strong> {com.comment}</li>)}
                    </ul></div>}
            </div>
        </Link >

    )
}
function checkPropsComming(prevP, nextP) {
    return JSON.stringify(prevP) === JSON.stringify(nextP)
}

export default React.memo(PostFuncComponent, checkPropsComming)