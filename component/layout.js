import Head from 'next/head'
import Link from 'next/link'
import Top from './block/top'
import Nav from './block/nav'

export default function Layout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Head>
                <title>協同學生論壇 CMS Forum</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    type="text/css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous" />
            </Head>

            <Top />
            <Nav />

            <div>{children}</div>

            <footer className="bg-light mt-auto">
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center d-md-flex align-items-center">
                                <Link href="/about-us">
                                    <a className="d-block mx-3 my-3 text-dark" style={{textDecoration: "none"}}>關於我們</a>
                                </Link>
                                <Link href="/blog">
                                    <a className="d-block mx-3 my-3 text-dark" style={{textDecoration: "none"}}>部落格</a>
                                </Link>
                                <Link href="/rule">
                                    <a className="d-block mx-3 my-3 text-dark" style={{textDecoration: "none"}}>平台守則</a>
                                </Link>
                                <img className="d-block mx-auto" src="/img/shorts-lg.png"/>
                                <p className="my-3 py-1">©2020 CMSForum all rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}