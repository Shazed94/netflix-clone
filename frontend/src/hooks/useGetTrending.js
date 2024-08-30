import { useEffect, useState } from "react"
import { useContentStore } from "../store/content"
import axios from "axios"


export default function useGetTrendingContent() {
    const [trendingContent, setTrendingContent] = useState(null)
    const { contentType } = useContentStore()

    useEffect(() => {
        const getTrendingContent = async () => {
            const res = await axios.get(`/api/v1/${contentType}/trending`)
            console.log(res)
            setTrendingContent(res.data.content)
        }

        getTrendingContent()
    }, [contentType])

    return { trendingContent }
}
