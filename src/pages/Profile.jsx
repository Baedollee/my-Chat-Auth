import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fireBase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(auth);
    await navigate('/');
  };

  return (
    <div>
      <button onClick={logOut}>로그아웃</button>
    </div>
  );
};

export default Profile;
