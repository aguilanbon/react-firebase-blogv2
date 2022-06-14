import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import UserForm from './pages/UserForm';
import { BlogProvider } from './BlogContext';

function App() {

  const [formState, setFormState] = useState('login')
  const [isAuth, setIsAuth] = useState(localStorage.getItem('auth'))
  const [isActive, setIsActive] = useState()

  return (
    <BlogProvider>
    <div className="App">
      <Navbar setFormState={setFormState} isAuth={isAuth} setIsAuth={setIsAuth} setIsActive={setIsActive} isActive={isActive}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog/create' element={<Create isAuth={isAuth} setIsActive={setIsActive} />}></Route>
          <Route path='/user/login' element={<UserForm setFormState={setFormState} formState={formState} setIsAuth={setIsAuth} />}></Route>
        </Routes>
    </div>
    </BlogProvider>
  );
}

export default App;
