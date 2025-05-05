import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../components/layout/Mainnavigation";
import Landing from "../pages/Landing";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainNavigation>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </MainNavigation>
    </BrowserRouter>
  );
}

export default AppRoutes;
