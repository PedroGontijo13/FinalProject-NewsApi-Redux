import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsArticle from "./components/NewsArticle/NewsArticle";
import { useSelector } from "react-redux";

function App() {
  const articles = useSelector((state) => state.news.articles);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/articles/:id"
          element={<NewsArticle articles={articles} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
