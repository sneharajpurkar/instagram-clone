import './App.css';
import { Routes, Route } from 'react-router-dom'
import Regiater from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddPost from './components/AddPost';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';


function App() {
  return (
    <>
      <div>
        <Routes>
        <Route excat path='/register' element={<Regiater/>} />
        <Route excat path='/login' element={<Login/>} />
        <Route excat path='/homepage' element={<HomePage/>} />
        <Route excat path='/addpost' element={<AddPost/>}/>
        <Route excat path='/sidebar' element={<Sidebar/>}/>
        <Route excat path='/profile' element={<Profile/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;