import Head from 'next/head'
import Top from './top'
import Nav from './nav'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>CMS Forum</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
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
        </div>
    )
}