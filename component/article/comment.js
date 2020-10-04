import { convertBriefTime, themeColor } from '../../functions/utils'
import Linkify from 'linkifyjs/react'
import { useEffect } from 'react'

export default function Comment({ comments, postId, onComment }) {
    useEffect(() => {
        document.getElementById('form-comment').addEventListener('keypress', (e) => {
            console.log(e)
            if (e.ctrlKey && e.code === 'Enter') {
                postComment()
                document.getElementById('form-comment').value = ''
            }
        })
    })

    const postComment = async () => {
        if (!document.getElementById('form-comment').value) return

        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                authorId: '5f28c3d328666f21bca62f7e',
                content: document.getElementById('form-comment').value
            })
        }).then(async res => {
            if (!res.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
        })
            .then(() => {
                document.getElementById('form-comment').value = ''
                onComment()
            })
    }
}

export default function Comment({ comments }) {
    return (
        <div>
            <div className="list-group mt-3">
                {comments.map(comment => (
                    <div className="list-group-item list-group-item-action flex-column align-items-start" key={comment._id}>
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{comment.authorName}</h6>
                            <small className="text-muted">{convertBriefTime(comment.postTime)}</small>
                        </div>
                        <Linkify className="my-1" tagName="p" style={{ whiteSpace: "pre-line" }}>{comment.content}</Linkify>
                    </div>
                ))}
            </div>
        </div>
    )
}