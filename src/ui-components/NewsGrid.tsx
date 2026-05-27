import { useState, useEffect } from "react"
import getNews from "@/services/GetNews"
import Newscard from "./Newscard"

interface News {
    id: string
    link: string;
    title: string;
    image_url: string | null;
    source_name: string;
    source_icon: string | null;
}

const NewsGrid = () => {

  const[news, setNews] = useState<News[]>([])

  useEffect(()=>{
    async function fetchNews() {

      const Data = await getNews()
      // console.log(Data)
      setNews(Data)
      
    }
    fetchNews()
  },[])

  return (
    <div className="text-white flex flex-col gap-4 mt-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
  
  <p className="font-bold text-lg sm:text-xl">
    Thought Provoking Stories
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
    
    {news.map((newsItem) => {
      return (
        <Newscard key={newsItem.id} news={newsItem} />
      );
    })}

  </div>
</div>
  )
}

export default NewsGrid