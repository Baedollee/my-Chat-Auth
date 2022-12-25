import React, { useEffect, useState } from 'react';
import { auth } from './fireBase';
import AppRouter from './Router';

function App() {
  const [init, setInit] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return <AppRouter isLogin={isLogin} />;
}

export default App;
