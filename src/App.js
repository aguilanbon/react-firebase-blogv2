import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import UserForm from './pages/UserForm';

function App() {

  const [formState, setFormState] = useState('login')
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'))

  return (
    <div className="App">
      <Navbar setFormState={setFormState} isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog/create' element={<Create isAuth={isAuth} />}></Route>
          <Route path='/user/login' element={<UserForm setFormState={setFormState} formState={formState} setIsAuth={setIsAuth} />}></Route>
        </Routes>
    </div>
  );
}

export default App;
