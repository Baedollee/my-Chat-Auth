import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../fireBase';

const home = () => {
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
};

export default home;
