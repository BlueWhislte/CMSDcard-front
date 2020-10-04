import Layout from '../../component/layout'
import { themeColor } from '../../functions/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Post() {
    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('auth')) router.push('/user/login')
    }, [])

    const postArticle = async () => {
        if (!document.getElementById('form-title').value) return window.alert('Sorry!  Σ(･口･)   填好填滿不要留空白啦')
        else if (!document.getElementById('form-content').value) return window.alert('Sorry!  Σ(･口･)   填好填滿不要留空白啦')
        
        return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            },
            body: JSON.stringify({
                title: document.getElementById('form-title').value,
                content: document.getElementById('form-content').value
            })
        }).then(async res => {
            if (res.ok) router.push(`/article/new`)
            else if (res.status == 400) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
        })
    }

    return (
        <Layout>
            <div className="py-5 text-center mt-3" >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 col-10">
                            <h1>投稿</h1>
                            <p className="mb-3">大聲說出你的想法!</p>
                            <form className="text-left">
                                <div className="form-group">
                                    <label htmlFor="form16">標題</label>
                                    <input type="text" className="form-control" id="form-title" placeholder="你的主題" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form17">內文</label>
                                    <div className="form-group">
                                        <textarea className="form-control" id="form-content" rows="10" placeholder="你想說的話..."></textarea>
                                    </div>
                                </div>
                                <small className="text-danger">注意: 文章一旦發佈恕將無法再編輯或刪除</small>
                                <br />
                                <button type="button" className="btn mt-3" style={{ background: themeColor, color: "#ffffff" }} onClick={postArticle}>潑文</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}