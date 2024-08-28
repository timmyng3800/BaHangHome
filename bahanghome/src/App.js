import "./App.css";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import NavBar from "./Component/NavBar";
import Contact from "./Component/Contact";
import test from "./asset/test.jpg";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import styles from "../src/mystyle.module.css";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${test})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    
  };

  return (
    <Router>
      <div>
        <NavBar />
        
        <div className={styles.backgroundImage}>
          <div className={styles.centered}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          </div>
         
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
