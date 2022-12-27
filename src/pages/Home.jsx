import React, { useEffect, useState } from 'react';
import { dbService } from '../fireBase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Home = () => {
  const [nweet, setNweet] = useState('');
  const [getTweet, setGetTweet] = useState([]);
  const date = new Date();
  const time = date.getFullYear();

  const getNweet = async () => {
    const dbNweet = await getDocs(collection(dbService, 'bweet'));
    dbNweet.forEach((doc) => {
      setGetTweet((prev) => [doc.data(), ...prev]);
    });
  };
  console.log(getTweet);

  useEffect(() => {
    getNweet();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(dbService, 'nweet'), {
      nweet,
      createdAt: Date.now(),
    });
    setNweet('');
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type='text'
          placeholder='글을 적어주세요'
          maxLength={120}
        />
        <input type='submit' value='Nweet' />
      </form>
    </div>
  );
};

export default Home;
