import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";


export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/Login" element={<Login />} />
            </Routes>
    )
}