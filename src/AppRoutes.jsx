import { Route, Routes } from "react-router-dom";
import LoginScreen from "./Pages/loginScreen.jsx";

export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/loginScreen" element={<LoginScreen />} />
            </Routes>
    )
}