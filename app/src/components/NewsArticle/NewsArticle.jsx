import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NewsArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-17&sortBy=publishedAt&apiKey=4f149de8d35945bb91dddfd36d5f6002`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const article = data.articles.find(
          (article) => article.title.toLowerCase().replace(/\s/g, "-") === id
        );
        setArticle(article);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default NewsArticle;
