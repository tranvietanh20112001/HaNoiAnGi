import { Route, Routes } from "react-router";
import { AdminRoutes } from "./admin.route";
import HomeLayout from "../pages/Manage/home";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/error";
export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {AdminRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
