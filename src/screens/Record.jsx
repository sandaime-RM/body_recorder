import React, { useState, useEffect } from 'react';
import {doc, updateDoc, arrayUnion, setDoc, getDoc } from 'firebase/firestore';
import { db } from '..';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '..';

const Record = () => {

    const navigate = useNavigate();

    const [userData, setUser] = useState({photoURL: "../imgs/person.png"});

    //ユーザー情報の取得
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              // User is signed out
              // ...
          }
      });
    })


    const [newDate, setNewDate] = useState(() => {
        const date = new Date();
        const dateText = date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" + ('0' + (date.getDate())).slice(-2)
        return dateText
    })

    const [newWeight, setWeight] = useState();

    const dateChanged = (e) => {
        setNewDate(e.target.value);
    }

    const weightChanged = (e) => {
        setWeight(e.target.value);
    }

    //アップロード
    const register = async () => {
        const newData = {date: (new Date(newDate)), weight: newWeight};

        const snap = await getDoc(doc(db, "users", userData.uid));

        if(snap.data().weight) {
            updateDoc(doc(db, "users", userData.uid), {
                "weight": arrayUnion(newData)
            })
            .then(() => {
                navigate("/");
            })
        } else {
            setDoc(doc(db, "users", userData.uid), {
                "weight": arrayUnion(newData)
            })
            .then(() => {
                navigate("/");
            })
        }
    }

  return (
    <div className='px-5'>
        <div className='mb-4'>
            <h2 className='text-slate-500 text-xl mb-2'>
                <i className="bi bi-pencil-square me-3 text-2xl align-middle"></i>
                新しい記録
            </h2>

            <h3 className='text-lime-600 text-center text-xl'>体重</h3>
        </div>

        <div className='mb-5 px-4 text-center'>
            <div className='inline-block text-left'>
                <label className='text-slate-500 text-sm'>日付</label><br />
                <input className='rounded-2xl px-4 py-3 border mt-1 mb-3 text-center text-lime-600 text-xl w-full max-w-xs' type="date" value={newDate} onChange={dateChanged}/>

                <label className='text-slate-500 text-sm'>体重 [kg]</label><br />
                <input className='rounded-2xl px-4 py-3 border mt-1 mb-3 text-center text-lime-600 text-xl w-full max-w-xs' type="number" value={newWeight} onChange={weightChanged}/>

                <button className='w-full rounded-xl bg-lime-500 my-2 py-2 text-lg text-white shadow-sm border border-lime-600 hover:bg-lime-600' onClick={(e) => register(e)}><i className="bi bi-check-lg me-2"></i>登録</button>
            </div>
            
        </div>
    </div>
  )
}

export default Record