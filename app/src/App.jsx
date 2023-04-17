import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewsArticle from "./components/NewsArticle/NewsArticle";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles/:id" component={NewsArticle} />
      </Switch>
    </Router>
  );
}

export default App;
