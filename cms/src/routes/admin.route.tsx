import { IRoute } from "@interfaces/route.interface";
import Dashboard from "../pages/Manage/dashboard/dashboard";
import Users from "../pages/Manage/users/users";
import Post from "../pages/Manage/posts/post";
import Restaurant from "../pages/Manage/restaurants/res";
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
    component: (
      <AuthorizedPage>
        <Users />
      </AuthorizedPage>
    ),
  },

  {
    path: "admin/post",
    component: (
      <AuthorizedPage>
        <Post />
      </AuthorizedPage>
    ),
  },

  {
    path: "admin/restaurant",
    component: (
      <AuthorizedPage>
        <Restaurant />
      </AuthorizedPage>
    ),
  },
];
