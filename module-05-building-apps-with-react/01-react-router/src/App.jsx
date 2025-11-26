import Stars from "./pages/Stars";
import AlphaCentauri from "./pages/AlphaCentauri";

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import SingleStar from "./pages/SingleStar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Stars />} />
        <Route path="/alpha-centauri" element={<AlphaCentauri />} />
        <Route path="/star/:slug" element={<SingleStar />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
