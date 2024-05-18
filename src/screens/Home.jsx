import React, { useState } from 'react'
import WeightGraph from './WeightGraph'
import SpeedMenuButton from './SpeedMenuButton'

const Home = () => {

    const [weights, setWeights] = useState([["5/12", "5/13", "5/14", "5/15", "5/16", "5/17", "5/18"], [79.6, 79.4, 79.2, 78.7, 78.8, 78.4, 78.6]]);

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
                <SpeedMenuButton text="体温を記録" icon="thermometer-half" type={2}/>
                <SpeedMenuButton text="身長を記録" icon="rulers" type={3}/>
            </div>
        </div>
    </div>
  )
}

export default Home