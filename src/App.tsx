import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Search } from "./routes/Search";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
};
