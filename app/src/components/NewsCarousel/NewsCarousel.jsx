import React from "react";
import { useSelector } from "react-redux";
import { selectArticles } from "../../redux/newsSlice";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import newsBg from "../../assets/news.jpeg";

const NewsCarousel = () => {
  const articles = useSelector(selectArticles);

  if (!articles || !articles.length) {
    return null; // or some other placeholder component
  }

  return (
    <Carousel>
      {articles.slice(0, 3).map((article) => (
        <Carousel.Item
          key={article.title}
          style={{
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
              article.urlToImage ? article.urlToImage : newsBg
            }) no-repeat center center`,
            backgroundSize: "cover",
            color: "#fff",
            height: "300px",
            padding: "50px",
          }}
        >
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default NewsCarousel;
