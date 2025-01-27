import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Register } from "../pages/user/Register";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/register-user" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;