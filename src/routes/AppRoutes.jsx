import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateLayout from "../layouts/PrivateLayout";
import SettingsPage from "../pages/SettingsPage";
import ReportsPage from "../pages/ReportsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path="/app" element={<App />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/relatorios" element={<ReportsPage />} />
      </Route>

      <Route path="/configuracoes" element={<SettingsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
