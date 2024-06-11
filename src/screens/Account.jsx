import { React, useEffect, useState } from 'react';
import { auth } from '..';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";

const Account = () => {
    const provider = new GoogleAuthProvider();
    const [userData, setUser] = useState({photoURL: "../imgs/person.png"})

    //サインイン
    const SignIn = (e) => {
        signInWithRedirect(auth, provider);
    }

    //サインアウト
    const SignOut = (e) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.reload();
        }).catch((error) => {
            // An error happened.
        });
    }

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


    return (
        <div className='py-3 text-center container'>
            <h1 className='text-xl mb-6 text-center text-slate-500 mb-5'>アカウント</h1>

            <div className='max-w-2xl inline-block mb-4'>
                <div className='mb-8'>
                    <img src={userData.photoURL} className='w-24 inline-block align-middle me-4 rounded-full' />
                    <div className='inline-block text-left align-middle'>
                        <h2 className='text-2xl mb-3 text-lime-700'>{userData.displayName}</h2>
                        <p className='mb-3 text-slate-500 text-sm'>{userData.email}</p>
                    </div>
                </div>
                

                <div className='grid md:grid-cols-2 mx-4 my-4'>
                    <button className='bg-lime-500 hover:bg-lime-600 text-white rounded-lg px-4 py-2 shadow-sm mx-2' onClick={(e) => SignIn(e)}><i className="bi bi-google me-2"></i>サインイン</button>
                    <button className='bg-white hover:bg-slate-100 text-slate-500 rounded-lg px-4 py-2 shadow-sm mx-2' onClick={(e) => SignOut(e)}><i className="bi bi-x-lg me-2"></i>サインアウト</button>
                </div>
            </div>
            
        </div>
    )
}

export default Account