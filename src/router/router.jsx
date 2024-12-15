import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Settings from "../pages/Settings";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default Router;