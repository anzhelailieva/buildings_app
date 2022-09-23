import { Route, Routes } from "react-router-dom";
import Buildings from "./pages/Buildings";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buildings" element={<Buildings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}