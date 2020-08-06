import Layout from '../../component/layout'
import Post from '../../component/article/post'
import { useState, useEffect } from 'react'

export default function Hot() {
    const [data, setData] = useState()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:6001/post/select/hot', {
                headers: {
                    // 'Authorization': localStorage.getItem('auth')
                }
            })
            setData(await res.json())
        }
        fetchData()
    })

    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">熱門文章</h1>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                {data ?
                    data.map(post => (
                        <Post post={post} key={post.title} />
                    )) : (
                        <>
                            <br />
                            <br />
                            <br />
                            <div className="py-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className="text-center">目前沒有文章</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                        </>
                    )
                }
            </main>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Layout>
    )
}