import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../components/layout/Mainnavigation";
import Landing from "../pages/Landing";
import ProjectDetails from "../components/ui/ProjectDescription";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MainNavigation>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:projectName" element={<ProjectDetails />} />
        </Routes>
      </MainNavigation>
    </BrowserRouter>
  );
}

export default AppRoutes;
