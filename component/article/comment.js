import { convertBriefTime, themeColor } from '../../functions/utils'
import Linkify from 'linkifyjs/react'
import { useEffect } from 'react'

export default function Comment({ comments, postId }) {
    

    

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