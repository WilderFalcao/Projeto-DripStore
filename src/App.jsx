import AppRoutes from "./AppRoutes.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./Components/Header/index.jsx";

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}