import Head from 'next/head'

export default function NotFound() {
    return (
        <div className="d-flex align-items-center" style={{background: "#000000", position: "fixed", width:"100%", height: "100%"}}>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous" />
            </Head>
            <img src="404.jpg" className="mx-auto" style={{display:"block", width:"30%", verticalAlign:"center"}} />
        </div>
    )
}