import React, { useState } from 'react';
import { auth } from '../fireBase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    console.log(e.target.value, e.target.name);
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
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
      </form>
    </div>
  );
};

export default SignIn;
