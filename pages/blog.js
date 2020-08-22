import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import Layout from '../component/layout'

export default function Blog({ contentHtml }) {
    return (
        <Layout>
            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-5 mt-3">部落格</h1>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </Layout>
    )
}

export async function getStaticProps() {
    const filePath = require('path').join(process.cwd(), 'public/blog.md')
    const contents = require('fs').readFileSync(filePath, 'utf-8')
    const matterResult = matter(contents)
    const processContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processContent.toString()

    return {
        props: {
            contentHtml
        }
    }
}