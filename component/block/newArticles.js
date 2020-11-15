import Post from '../article/post'
import Loading from '../loading'

export default function NewAritcle({ data }) {
    return (
        <>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">最新文章</h1>
                        </div>
                    </div>
                </div>
            </div>

            {data ?
                (
                    Array.from(data).length === 0 ? 
                    (
                        <div className="py-5 mt-5" >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <h6>沒有最新文章 :P</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) 
                    : 
                    data.map(post => (
                        <Post post={post} key={post._id} />
                    ))
                ) 
                : 
                (
                    <Loading />
                )
            }
        </>
    )
}