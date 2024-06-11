import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css"; //アイコン

//各ページの読み込み
import Header from './screens/Header';
import Footer from './screens/Footer';
import Home from './screens/Home';
import Record from './screens/Record';
import Account from './screens/Account';

function App() {
  return (
    <div className='bg-slate-50'>
      <BrowserRouter>
        <Header />

        <div className='container mx-auto py-4 my-3'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="record/" element={<Record />}/>
            <Route path="account/" element={<Account />}/>

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
