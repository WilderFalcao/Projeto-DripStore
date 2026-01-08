import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx";


export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
    )
}