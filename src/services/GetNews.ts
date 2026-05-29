const API_KEY: string | undefined = import.meta.env.VITE_NEWS_API;

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
  nextPage?: string;
}

interface GetNewsResponse {
  news: NewsItem[];
  nextPage?: string;
}

async function getNews(
  page: string = ""
): Promise<GetNewsResponse> {
  try {
    const NEWS_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&prioritydomain=top${
      page ? `&page=${page}` : ""
    }`;

    const res = await fetch(NEWS_URL);

    const data: ApiResponse = await res.json();

    console.log(data);

    const formatted_news: NewsItem[] = data.results.map((news) => ({
      id: news.article_id,
      link: news.link,
      title: news.title,
      image_url: news.image_url,
      source_name: news.source_name,
      source_icon: news.source_icon,
    }));

    return {
      news: formatted_news,
      nextPage: data.nextPage,
    };
  } catch (e) {
    console.error("Error Fetching News:", e);

    return {
      news: [],
      nextPage: "",
    };
  }
}

export default getNews;