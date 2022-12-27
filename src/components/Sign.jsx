import React, { useState } from 'react';
import { auth } from '../fireBase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [googleData, setGoogleData] = useState(null);

  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (newAccount) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => console.log(userCredential))
        .catch((err) => console.log('11111', err));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => console.log(userCredential))
        .catch((err) => console.log('22222', err.firebase));
    }
  };
  // const handleGoogleLogin = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then((data) => {
  //       setGoogleData(data);
  //       console.log(data.user.email);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const onSocialClick = (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((data) => {
          setGoogleData(data);
          console.log(data.user.email);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (name === 'github') {
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Log In</h1>
        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          required
          value={email}
          onChange={onChangeHandler}
        />
        <input
          name='password'
          type='password'
          placeholder='Enter your password'
          required
          value={password}
          onChange={onChangeHandler}
        />
        {}
        <input type='submit' value={newAccount ? '계정 생성' : '로그인'} />
      </form>
      <span onClick={toggleAccount}>{newAccount ? '로그인' : '계정 생성'}</span>

      <button onClick={onSocialClick} name='google'>
        구글 로그인
      </button>
      <button onClick={onSocialClick} name='github'>
        깃헙 로그인
      </button>
    </div>
  );
};

export default Sign;
