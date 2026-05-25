interface News {
  id: string;
  link: string;
  title: string;
  image_url: string | null;
  source_name: string;
  source_icon: string | null;
}

interface NewsCardProps {
  news: News;
}

const Newscard = ({ news }: NewsCardProps) => {
  return (
    <a
      href={news.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-2xl w-65  bg-gray-700/60 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="h-35 w-full overflow-hidden bg-gray-200">
        {news.image_url ? (
          <img
            src={news.image_url}
            alt={news.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5 p-4">
        <h2 className="h-18 line-clamp-3 text-[15px] font-light text-white">
          {news.title}
        </h2>

        <div className="flex items-center gap-2  px-2 py-1">
          {news.source_icon && (
            <img
              src={news.source_icon}
              alt={news.source_name}
              className="h-5 w-5 rounded-full"
            />
          )}

          <p className="text-sm text-white">{news.source_name}</p>
        </div>
      </div>
    </a>
  );
};

export default Newscard;
