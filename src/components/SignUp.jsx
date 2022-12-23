import React, { useState } from 'react';
import { auth } from '../fireBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;
    console.log(e?.target?.value, e?.target?.name);
    if (name === 'email' && value !== null) {
      setEmail(value);
    } else if (name === 'password' && value !== null) {
      setPassword(value);
    }
  };
  const onSubmitHandler = async (e) => {
    e?.preventDefault();
    try {
      let data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
    } catch (err) {
      console.log(err?.message);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Log Up</h1>
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
        <button type='submit'>Log Up</button>
      </form>
    </div>
  );
};

export default SignUp;
