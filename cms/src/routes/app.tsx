import { Route, Routes } from "react-router";
import { AdminRoutes } from "./admin";
import HomeLayout from "../pages/Manage/home";
import Login from "../pages/Login/Login";
export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {AdminRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
