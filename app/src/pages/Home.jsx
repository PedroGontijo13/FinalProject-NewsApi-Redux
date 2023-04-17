import { Provider } from "react-redux";
import NavBar from "../components/Nav/NavBar";
import store from "../store/store";
import News from "../components/News/News";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <Provider store={store}>
      <NavBar />
      <NewsCarousel />
      <News />
      <Footer/>
    </Provider>
  );
}

export default Home;
