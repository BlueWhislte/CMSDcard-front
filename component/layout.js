import Head from 'next/head'
import Top from './top'
import Nav from './nav'

export default function Layout({ children }) {
    return (
        <div className="container">
            <Head>
                <title>CMS Forum</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    type="text/css" />
            </Head>

            <Top />
            <Nav />

            <div>{children}</div>
        </div>
    )
}