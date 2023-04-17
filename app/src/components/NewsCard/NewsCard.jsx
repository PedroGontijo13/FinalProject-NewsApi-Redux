import styled from "styled-components";
import newsImg from "../../assets/news.jpeg";
import { Link } from "react-router-dom";

const CardArea = styled.div`
  flex-grow: 1;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  .content {
    padding: 1.1rem;
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem;
  }

  .link {
    display: inline-flex;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    gap: 0.25rem;
    background-color: #2563eb;
    padding: 4px 8px;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }

  .link span {
    transition: 0.3s ease;
  }
  .link:hover span {
    transform: translateX(4px);
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;
  img {
    width: 100%;
  }
`;

const NewsCard = ({ title, content, urlToImage, id }) => {
  return (
    <CardRow>
      <CardArea>
        <img src={urlToImage ? urlToImage : newsImg} alt="img-news" />
        <div className="content">
          <span className="title">{title}</span>
          <p className="desc">{content.slice(0, 120)}</p>
        </div>
        <div className="actions">
          <Link to={`/articles/${id}`} className="link">
            Find out more
            <span aria-hidden="true">➛</span>
          </Link>
        </div>
      </CardArea>
    </CardRow>
  );
};

export default NewsCard;
