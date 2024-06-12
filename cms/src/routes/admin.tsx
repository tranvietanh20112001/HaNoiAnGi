import { IRoute } from "@interfaces/route";
import Dashboard from "../pages/Manage/dashboard/dashboard";
export const AdminRoutes: IRoute[] = [
  {
    path: "admin/",
    component: <Dashboard />,
  },
];
