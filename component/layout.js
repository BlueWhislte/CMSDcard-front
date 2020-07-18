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

            <footer className="fixed-bottom">
                <div className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center d-md-flex align-items-center">
                                <i className="d-block fa fa-facebook-official text-muted fa-lg mx-4" />
                                <i className="d-block fa fa-instagram text-muted fa-lg mx-4" />
                                <i className="d-block fa fa-twitter text-muted fa-lg ml-0 mx-4" />
                                <i className="d-block fa fa-3x mx-auto text-primary fa-commenting" />
                                <p className="mb-0 py-1">©2018 Pingendo All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                    crossorigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                    integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                    crossorigin="anonymous" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                    crossorigin="anonymous" />
            </footer>
        </div>
    )
}