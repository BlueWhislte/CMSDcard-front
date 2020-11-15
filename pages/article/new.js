import Layout from '../../component/layout'
import NewArticles from '../../component/block/newArticles'
import HotArticles from '../../component/block/hotArticles'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function New() {
    const router = useRouter()
    const [data, setData] = useState()
    const [hotData, setHotData] = useState()

    useEffect(() => {
        fetchData()
        fetchHotData()
    }, [])

    async function fetchData() {
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/select/new`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            if (data.status == 401 || data.status == 403) {
                router.push('/user/login')
                router.reload()
            }
            else if (!data.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else setData(await data.json())
        } catch (err) {
            // window.alert("系統錯誤")
            console.log(err)
        }
    }

    async function fetchHotData() {
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/select/hot`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })

            if (data.status == 401 || data.status == 403) {
                router.push('/user/login')
                router.reload()
            }
            else if (!data.ok) window.alert('Sorry!  Σ(･口･)   ' + await res.text())
            else {
                setHotData(await data.json())
            }
        } catch (err) {
            // window.alert("系統錯誤")
            console.log(err)
        }
    }

    return (
        <Layout>
            <HotArticles data={hotData} />
            <NewArticles data={data} />
        </Layout>
    )
}