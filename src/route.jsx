import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<App />} />
      <Route path="*" element={<Navigate to="/signin" replace />} />
      <Route path="/login" element={<App/>}/>
    </Routes>
  );
};

export default AppRoutes;
