import Layout from '../../component/layout'
import Post from '../../component/article/post'
import Loading from '../../component/loading'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { themeColor } from '../../functions/utils'

export default function Search() {
    const router = useRouter()
    const [data, setData] = useState()

    // useEffect(() => {
    //     async function fetchData() {

    //     }
    //     setInterval(fetchData, 1000)
    //     fetchData()
    // }, [])

    const search = async () => {
        const data = await fetch('http://localhost:6001/post/search', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                regex: document.getElementById('form-regex').value
            })
        })
        if (data.status == 401 || data.status == 403) router.push('/user/login')
        else setData(await data.json())
    }

    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">搜尋文章</h1>
                            <hr />
                            <div className="row justify-content-center">
                                <input type="text" className="form-control col-md-8 mr-1" id="form-regex" placeholder="關鍵字" />
                                <button type="button" className="btn" onClick={search}>
                                    <i className="fa fa-search mr-1" aria-hidden="true" />
                                    搜尋
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                {data && data.length != 0 ?
                    data.map(post => (
                        <Post post={post} key={post._id} />
                    )) : (
                        <div className="container text-center my-5 py-5">
                            <p>無項目</p>
                        </div>
                    )
                }
            </main>
            <br />
            <br />
        </Layout>
    )
}