import { IRoute } from "@interfaces/route";
import Dashboard from "../pages/Manage/dashboard/dashboard";
import Users from "../pages/Manage/users/users";
import AuthorizedPage from "../components/AuthorizedPage/AuthorizedPage";
export const AdminRoutes: IRoute[] = [
  {
    path: "admin/dashboard",
    component: (
      <AuthorizedPage>
        <Dashboard />
      </AuthorizedPage>
    ),
  },

  {
    path: "admin/account",
    component: <Users />,
  },
];
