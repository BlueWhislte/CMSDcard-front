import Layout from '../../component/layout'
import Post from '../../component/article/post'
import Loading from '../../component/loading'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { themeColor } from '../../functions/utils'

export default function Search() {
    const router = useRouter()
    const [data, setData] = useState()

    useEffect(() => {
        if (!localStorage.getItem('auth')) router.push('/user/login')

        document.getElementById('form-regex').addEventListener('keyup', (e)=>{
            if (e.keyCode === 13) search()
        })
    })

    const search = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/search`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                regex: document.getElementById('form-regex').value
            })
        })
        if (data.status == 401 || data.status == 403)  {
            router.push('/user/login')
            router.reload()
        }
        else if (!data.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
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
                                <input type="text" className="form-control col-md-8 col-8 mr-1" id="form-regex" placeholder="關鍵字" />
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
        </Layout>
    )
}