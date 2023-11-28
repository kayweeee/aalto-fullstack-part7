import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CreateNew from "./components/CreateNew";
import About from "./components/About";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <h1>Software anecdotes</h1>
      <div>
        <Link style={padding} to="/">
          anecdotes
        </Link>
        <Link style={padding} to="/create">
          create new
        </Link>
        <Link style={padding} to="/about">
          about
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreateNew />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Menu;
