import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sign from './components/Sign';
import Navigation from './components/Navigation.js';

const AppRouter = ({ isLogin }) => {
  return (
    <BrowserRouter>
      {isLogin && <Navigation />}
      <Routes>
        {isLogin ? (
          <Route path='/' element={<Home />} />
        ) : (
          <Route
            path='/'
            element={
              <>
                <Sign />
              </>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
