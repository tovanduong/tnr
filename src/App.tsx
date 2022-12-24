import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/component/footer";
import Header from "./component/header/header";
import { GlobalStyle } from "./global/globalStyle";
function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
