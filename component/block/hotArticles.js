import { Carousel } from 'react-bootstrap'
import Post from '../article/post'
import Loading from '../loading'

export default function HotArticles({ data }) {
    const length = data ? Array.from(data).length : 0

    return (
        <>
            <style>
                {`
                .carousel-indicators,
                .carousel-control-next-icon,
                .carousel-control-prev-icon {
                  filter: invert(1);
                }
                `}
            </style>

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
                    length === 0 ? (
                        <div className="container" >
                            <div className="py-4">
                                <div className="row justify-content-center">
                                    <div className="col-md-12">
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
                            <div className="container" >
                                <Carousel interval={4000} className="d-md-none d-lg-none" style={{height:250}}>
                                    {data.map(post => (
                                        <Carousel.Item className="px-5" key={post._id}>
                                            <Post post={post} size={2} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <div className="d-none d-md-block">
                                    <div className="row">
                                        {data.map(post => (
                                            <>
                                                <Post post={post} size={4} key={post._id} />
                                            </>
                                        ))}
                                    </div>
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