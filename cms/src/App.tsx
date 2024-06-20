import { useEffect } from "react";
import AppRoutes from "./routes/app.route";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "react-toastify/dist/ReactToastify.css";
function App() {
  useEffect(() => {
    document.title = "HANOIANGI CMS";
  }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
