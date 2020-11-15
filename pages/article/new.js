import Layout from '../../component/layout'
import NewArticles from '../../component/block/newArticles'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function New() {
    const router = useRouter()
    const [data, setData] = useState()

    useEffect(() => {
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
        
        if (!localStorage.getItem('auth')) router.push('/user/login') 
        else fetchData()
    }, [])

    return (
        <Layout>
            <NewArticles data={data} />
        </Layout>
    )
}