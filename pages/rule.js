import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import Layout from '../component/layout'

export default function Rule({contentHtml}) {
    return (
        <Layout>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-5 mt-3">平台守則</h1>
                        <hr />
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
        </Layout>
    )
}

export async function getStaticProps() {
    const filePath = require('path').join(process.cwd(), '/public/rule.md')
    const content = require('fs').readFileSync(filePath, 'utf-8')
    const mattered = matter(content)
    const processContent = await remark()
        .use(html)
        .process(mattered.content)

    const contentHtml = processContent.toString()

    return {
        props: {
            contentHtml,
        }
    }
}