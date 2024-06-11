import React from 'react'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '..';
import { useEffect, useState } from 'react';

const Header = () => {

  const [userData, setUser] = useState({photoURL: "../imgs/person.png"});

  //ユーザー情報の取得
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user);
        } else {
            // User is signed out
            // ...
        }
    });
  })

  return (
    <div className='bg-white py-4 px-5 border-b border-slate-300 flex items-center justify-between flex-wrap'>
        <Link to="/" className="text-lime-700 text-2xl">からだれこーだー</Link>

        <Link to="/account">
          <img src={userData.photoURL} className='w-8 rounded-full inline me-2' />
          <p className='text-slate-500 inline align-middle'>{userData.displayName}</p>
        </Link>
    </div>
  )
}

export default Header