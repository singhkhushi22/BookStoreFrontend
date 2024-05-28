import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import AddBook from "./Pages/AddBook";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route exact path="/books"  element={<Book/>}/>
        <Route exact path="/addBooks"  element={<AddBook/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
   
    
  );
}

export default App;
