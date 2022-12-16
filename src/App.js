import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./component/404.page";
import About from "./component/about.page";
import Contact from "./component/contact.page";
import Homepage from "./component/homepage.page";
import "./App.css";
import BookDetails from "./component/BookDetails";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Homepage />} />

        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />

        {/* Dynamic Routing */}
        <Route path="books">
          <Route index element={<>Books</>} />
          <Route path=":id" element={<BookDetails />} />
        </Route>
      </Routes>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default App;

// Dynamic Routing --> path can change !
