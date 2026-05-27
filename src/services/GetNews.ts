const API_KEY: string | undefined = import.meta.env.VITE_NEWS_API;

const NEWS_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&prioritydomain=top`;
interface NewsItem {
    id: string;
    link: string;
    title: string;
    image_url: string | null;
    source_name: string;
    source_icon: string | null;
}

interface ApiResponse {
    results: any[];
}

async function getNews(): Promise<NewsItem[]> {
    try {
        const res = await fetch(NEWS_URL);

        const data: ApiResponse = await res.json();
        console.log(data.results)

        const limitedNews = data.results.slice(0, 30);

        const formatted_news: NewsItem[] = limitedNews.map((news) => ({
            id: news.article_id,
            link: news.link,
            title: news.title,
            image_url: news.image_url,
            source_name: news.source_name,
            source_icon: news.source_icon,
        }));

        // console.log(formatted_news);

        return formatted_news;

    } catch (e) {
        console.error("Error Fetching News:", e);
        return [];
    }
}

export default getNews;