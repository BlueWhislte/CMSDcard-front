import Layout from '../../component/layout'
import Post from '../../component/article/post'
import PagingButtons from '../../component/block/pagingButtons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
    const router = useRouter()
    const [data, setData] = useState()
    const [regex, setRegex] = useState('')

    useEffect(() => {
        if (!localStorage.getItem('auth')) router.push('/user/login')

        // document.getElementById('form-regex').addEventListener('keyup', (e) => {
        //     if (e.key === 'Enter') search()
        // })
    })

    const search = async (page) => {
        if (!regex) return

        console.log('first:', regex)

        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/search`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                regex: regex,
                page: page || 1
            })
        })

        console.log('second:', regex)
        if (data.status == 401 || data.status == 403) {
            router.push('/user/login')
            router.reload()
        }
        else if (!data.ok) return window.alert('Sorry!  Σ(･口･)   ' + await data.text())
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
                                <input type="text" className="form-control col-md-8 col-8 mr-1" id="form-regex" placeholder="關鍵字"
                                    onChange={(e) => setRegex(e.target.value)} />
                                <button type="button" className="btn" onClick={()=>search()}>
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
                    data.docs.map(post => (
                        <Post post={post} key={post._id} />
                    )) : (
                        <div className="container text-center my-5 py-5">
                            <p>無項目</p>
                        </div>
                    )
                }
                <div className="container">
                    <div className="row justify-content-center">
                        <PagingButtons totalPage={data && data.totalPages || 0} currPage={data && data.page || 0} changePage={search} />
                    </div>
                </div>
            </main>
        </Layout>
    )
}