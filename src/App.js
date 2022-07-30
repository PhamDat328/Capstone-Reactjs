import HomeTemplate from "./Templates/HomeTemplate";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import HomePage from "./Pages/HomePage/HomePage";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./Pages/Detail/MovieDetail";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/detail/:movieId" element={<MovieDetail />} />
          <Route path="/purchase" element={<Purchase />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <h1 className="text-2xl font-bold underline">Hello world!</h1>
  );
}

export default App;
