import React from 'react'
import './style.css'

function PostFuncComponent(props) {

    const { author, content, onClick, isClicked, comments, isFocus,id } = props
    console.log('render', author)
    return (
        <div className={isClicked ? ` post-clicked post` : ` post`} onClick={()=>onClick(id)} >
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
function checkPropsComming(prevP, nextP) {
    return JSON.stringify(prevP) === JSON.stringify(nextP)
}

export default React.memo(PostFuncComponent, checkPropsComming)