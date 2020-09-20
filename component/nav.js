import Link from 'next/link'
import { useState, useEffect } from 'react'
import { themeColor } from '../functions/utils'
import { Navbar } from 'react-bootstrap'

export default function Nav() {
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(localStorage.getItem('auth'))
    })

    return (
        <Navbar expand="md" sticky="top" style={{ backgroundColor: "#111111" }} >
            <div className="container">
                <Navbar.Brand>
                    {token ? (
                        <div className="navbar-brand">
                            <img className="d-inline" src="/img/shorts.png" />
                        </div>
                    ) : (
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img className="d-inline" src="/img/shorts.png" />
                                </a>
                            </Link>
                        )}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#aaaaaa" }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href={token ? "/article/hot" : "/user/login"}>
                                <a className="nav-link" style={{ color: "#aaaaaa" }}>熱門文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/article/new" : "/user/login"}>
                                <a className="nav-link" style={{ color: "#aaaaaa" }}>最新文章</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/article/post" : "/user/login"}>
                                <a className="nav-link" style={{ color: "#aaaaaa" }}>我要投稿</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={token ? "/article/search" : "/user/login"}>
                                <a className="nav-link" style={{ color: "#aaaaaa" }}>搜尋文章</a>
                            </Link>
                        </li>
                    </ul>
                    {token ? (
                        <>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/user/account">
                                        <a className="nav-link" style={{ color: "#aaaaaa" }}>我的帳號</a>
                                    </Link>
                                </li>
                            </ul>
                            <Link href="/user/login">
                                <a className="btn navbar-btn ml-md-2" onClick={() => { localStorage.removeItem('auth') }} style={{ backgroundColor: themeColor }}>登出</a>
                            </Link>
                        </>
                    ) : (
                            <>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link href="/user/register">
                                            <a className="nav-link" style={{ color: "#aaaaaa" }}>註冊</a>
                                        </Link>
                                    </li>
                                </ul>
                                <Link href="/user/login">
                                    <a className="btn navbar-btn ml-md-2" style={{ backgroundColor: themeColor }}>登入</a>
                                </Link>
                            </>
                        )}
                </Navbar.Collapse>
            </div>
        </Navbar>
    )

    // return (
    //     <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "#000000" }}>
    //         <div className="container">
    // <Link href={token ? "" : "/"}>
    //     <a className="navbar-brand">
    //         <img className="d-inline" src="/img/shorts.png" />
    //     </a>
    // </Link>
    //             <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
    //                 data-target="#navbar11">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbar11">
    // <ul className="navbar-nav mr-auto">
    //     <li className="nav-item">
    //         <Link href={token ? "/article/hot" : "/user/login"}>
    //             <a className="nav-link">熱門文章</a>
    //         </Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link href={token ? "/article/new" : "/user/login"}>
    //             <a className="nav-link">最新文章</a>
    //         </Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link href={token ? "/article/post" : "/user/login"}>
    //             <a className="nav-link">我要投稿</a>
    //         </Link>
    //     </li>
    //     <li className="nav-item">
    //         <Link href={token ? "/article/search" : "/user/login"}>
    //             <a className="nav-link">搜尋文章</a>
    //         </Link>
    //     </li>
    // </ul>
    // {token ? (
    //     <>
    //         <ul className="navbar-nav ml-auto">
    //             <li className="nav-item">
    //                 <Link href="/user/account">
    //                     <a className="nav-link">我的帳號</a>
    //                 </Link>
    //             </li>
    //         </ul>
    //         <Link href="/user/login">
    //             <a className="btn navbar-btn ml-md-2" onClick={() => { localStorage.removeItem('auth') }} style={{ backgroundColor: themeColor }}>登出</a>
    //         </Link>
    //     </>
    // ) : (
    //         <>
    //             <ul className="navbar-nav ml-auto">
    //                 <li className="nav-item">
    //                     <Link href="/user/register">
    //                         <a className="nav-link">註冊</a>
    //                     </Link>
    //                 </li>
    //             </ul>
    //             <Link href="/user/login">
    //                 <a className="btn navbar-btn ml-md-2" style={{ backgroundColor: themeColor }}>登入</a>
    //             </Link>
    //         </>
    //     )}
    //             </div>
    //         </div>
    //     </nav>
    // )
}

{/* <Navbar bg="dark" expand="md">
            <div className="container">
                <Navbar.Brand>
                    <Link href={token ? "" : "/"}>
                        <a className="navbar-brand">
                            <img className="d-inline" src="/img/shorts.png" />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mr-auto">
                        <Nav.Link href={token ? "/article/hot" : "/user/login"}>熱門文章</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar> */}