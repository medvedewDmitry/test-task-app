import "./App.scss";
import Header from "./components/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";
import MenuInfo from "./components/MenuInfo";
import AsideNav from "./components/AsideNav/AsideNav";

function App() {
  return (
    <div className="App">
      <MenuInfo />
      <div className="container">
        <div className="row">
          <Header />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <AsideNav />
          <MainContent />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
