import { Provider } from "react-redux";
import NavBar from "./components/Nav/NavBar";
import store from "./store/store";
import News from "./components/News/News";
import NewsCarousel from "./components/NewsCarousel/NewsCarousel";

function Root() {
  return (
    <Provider store={store}>
      <NavBar />
      <NewsCarousel />
      <News />
    </Provider>
  );
}

export default Root;
