// context/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/homeview/home';
import { Articles } from '../pages/articles/articles';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
        </Routes>
    );
};

