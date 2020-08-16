import Head from 'next/head'
import Layout from '../component/layout'

export default function NotFound() {
    return (
        <Layout>
            <div className="d-flex align-items-center" style={{ background: "#000000", width: "100%", height: "100%", padding: "4rem" }}>
                <img src="404.jpg" className="mx-auto" style={{ display: "block", width: "30%", verticalAlign: "center" }} />
            </div>
        </Layout>
    )
}