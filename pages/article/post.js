import Layout from '../../component/layout'

export default function Post() {
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
                                    <input type="text" className="form-control" id="form16" placeholder="你的主題" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form17">內文</label>
                                    <div className="form-group">
                                        <textarea className="form-control" id="form30" rows="6" placeholder="你想說的話..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn" style={{background:"#12bbad", color:"#FFFFFF"}}>潑文</button>
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