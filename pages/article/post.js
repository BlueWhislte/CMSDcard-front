import Layout from '../../component/layout'

export default function Post() {
    return (
        <Layout>
            <br />
            <br />
            <div class="py-5 text-center" >
                <div class="container">
                    <div class="row">
                        <div class="mx-auto col-lg-6 col-10">
                            <h1>投稿</h1>
                            <p class="mb-3">你的每個意見都是寶貴的意見!</p>
                            <form class="text-left">
                                <div class="form-group">
                                    <label for="form16">標題</label>
                                    <input type="text" class="form-control" id="form16" placeholder="你的主題" />
                                </div>
                                <div class="form-group">
                                    <label for="form17">內文</label>
                                    <div class="form-group">
                                        <textarea class="form-control" id="form30" rows="6" placeholder="你想說的話..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary" contenteditable="true">潑文</button>
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