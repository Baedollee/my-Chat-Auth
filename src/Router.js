import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sign from './components/Sign';
import Navigation from './components/Navigation.js';
import Profile from './pages/Profile.jsx';

const AppRouter = ({ isLogin }) => {
  return (
    <BrowserRouter>
      {isLogin && <Navigation />}
      <Routes>
        {isLogin ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </>
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
