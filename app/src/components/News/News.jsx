import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import NewsCard from "../NewsCard/NewsCard";
import { setArticles } from "../../redux/newsSlice";

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  gap: 1rem;
`;

export default function News() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=keyword&apiKey=4f149de8d35945bb91dddfd36d5f6002"
      )
      .then((response) => {
        dispatch(setArticles(response.data.articles));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <NewsContainer>
      {articles &&
        articles
          .slice(0, 6)
          .map((article, index) => <NewsCard key={index} {...article} />)}
    </NewsContainer>
  );
}
