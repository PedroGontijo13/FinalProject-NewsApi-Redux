import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import NavBar from "../components/Nav/NavBar";
import News from "../components/News/News";
import NewsArticle from "../components/NewsArticle/NewsArticle";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import Footer from "../components/Footer/Footer";

function AppRoute() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default AppRoute;
