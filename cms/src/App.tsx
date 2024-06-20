import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NotificationProvider from "./providers/NotificationProvider";
import AppProvider from "./providers/app.provider";
import AppRoutes from "./routes/app.route";
import UserProvider from "./providers/user.provider";
function App() {
  return (
    <>
      <AppProvider>
        <NotificationProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </NotificationProvider>
      </AppProvider>
    </>
  );
}

export default App;
