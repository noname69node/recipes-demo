import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
