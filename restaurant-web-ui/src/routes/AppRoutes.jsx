import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
