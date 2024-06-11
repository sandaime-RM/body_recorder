import React, { useState, useEffect } from 'react'
import WeightGraph from './WeightGraph'
import SpeedMenuButton from './SpeedMenuButton'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '..'
import { doc, getDoc } from "firebase/firestore"

const Home = () => {

    const [weights, setWeights] = useState([[], []]);

    const [userData, setUser] = useState({photoURL: "../imgs/person.png"});

    //ユーザー情報の取得
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
          if (user) {
              const uid = user.uid;
              setUser(user);
              
              let weightsData = [[], []];

              const snap = await getDoc(doc(db, "users", uid));
              
              if(snap.data().weight) {
                snap.data().weight.forEach((data, index) => {
                    const date = new Date(data.date * 1000)
                    console.log(date.getMonth())
                    weightsData[0][index] = (date.getMonth() + 1) + "/" + date.getDate();
                    weightsData[1][index] = data.weight;
                });

                setWeights(weightsData)
              }
          } else {
              // User is signed out
              // ...
          }
      });
    }, userData)

    //体重データの追加
    const setNewWeight = () => {

    }

  return (
    <div className='py-3'>
        <div className='mb-5'>
            <h2 className='text-xl mb-6 text-center text-slate-500'>ダッシュボード</h2>

            <div className='grid lg:grid-cols-2'>
                <WeightGraph weights={weights}/>
            </div>

            <div className='text-center py-4'>
                <button className='text-slate-500 px-5 py-2 rounded-xl border'><i className="bi bi-list-task me-2"></i>すべて見る</button>
            </div>
        </div>
        

        <hr className='my-7' />

        <div className='mb-2'>
            <h3 className='mb-4 text-center text-sm text-slate-500'>
                <i className="bi bi-pencil-square me-2 text-xl align-middle"></i>
                記録
            </h3>
            
            <div className='grid md:grid-cols-3 mx-4'>
                <SpeedMenuButton text="体重を記録" icon="speedometer2" type={1} setData={setNewWeight}/>
                {/* <SpeedMenuButton text="体温を記録" icon="thermometer-half" type={2}/>
                <SpeedMenuButton text="身長を記録" icon="rulers" type={3}/> */}
            </div>
        </div>
    </div>
  )
}

export default Home