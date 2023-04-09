import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {LoginPage, MainPage } from '../pages';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Home" element={<MainPage />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes