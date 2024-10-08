// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import HomePage from "../pages/HomePage.jsx";
import SavedBouquetsPage from "../pages/SavedBouquetsPage.jsx";
import ConnexionPage from "../pages/ConnexionPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bouquets-sauvegardés" element={<SavedBouquetsPage />} />
                <Route path="/connexion" element={<ConnexionPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
