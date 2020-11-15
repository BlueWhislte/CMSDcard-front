import Post from '../article/post'
import Loading from '../loading'

export default function HotArticles({ data }) {
    return (
        <>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">熱門文章</h1>
                        </div>
                    </div>
                </div>
            </div>

            {data ?
                (
                    Array.from(data).length === 0 ? (
                        <div className="py-4" >
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="text-center">
                                            <h6>最近沒有熱門文章 :P</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                        :
                        (
                            <div class="container" style={{ overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap" }}>
                                <div class="row">
                                    {data.map(post => (
                                        <Post post={post} size={4} key={post._id} />
                                    ))}
                                </div>
                            </div>
                        )

                )
                :
                (
                    <Loading />
                )
            }
        </>
    )
}