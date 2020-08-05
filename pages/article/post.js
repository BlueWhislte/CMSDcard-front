import Layout from '../../component/layout'
import {useRouter} from 'next/router'

export default function Post() {
    const router = useRouter()

    const postArticle = async () => {
        return await fetch('http://localhost:6001/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: document.getElementById('form-title').value,
                content: document.getElementById('form-content').value
            })
        }).then(res => { 
            if (res.ok) router.push(`/article/${res.body._id}`)
        })
    }

    return (
        <Layout>
            <br />
            <br />
            <div className="py-5 text-center" >
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 col-10">
                            <h1>投稿</h1>
                            <p className="mb-3">你的每個意見都是寶貴的意見!</p>
                            <form className="text-left">
                                <div className="form-group">
                                    <label htmlFor="form16">標題</label>
                                    <input type="text" className="form-control" id="form-title" placeholder="你的主題" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form17">內文</label>
                                    <div className="form-group">
                                        <textarea className="form-control" id="form-content" rows="6" placeholder="你想說的話..."></textarea>
                                    </div>
                                </div>
                                <button type="button" className="btn" style={{background:"#12bbad", color:"#FFFFFF"}} onClick={postArticle}>潑文</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </Layout>
    )
}