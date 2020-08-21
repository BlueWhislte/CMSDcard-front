import Layout from '../../component/layout'
import Post from '../../component/article/post'
import Loading from '../../component/loading'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
    const router = useRouter()
    const [data, setData] = useState()

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('http://localhost:6001/post/search', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                },
                body: JSON.stringify({
                    regex: document.getElementById('form-regex').value
                })
            })
            if (data.status == 401 || data.status == 403) router.push('/user/login')
            else setData(await data.json())
        }
        setInterval(fetchData, 1000)
    }, [])

    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">搜尋文章</h1>
                            <hr />
                            <input type="text" className="form-control" id="form-regex" placeholder="關鍵字" />
                        </div>
                    </div>
                </div>
            </div>

            <main>
                {data ?
                    data.map(post => (
                        <Post post={post} key={post._id} />
                    )) : (
                        <p>查無結果</p>
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