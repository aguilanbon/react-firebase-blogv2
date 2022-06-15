import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import UserForm from './pages/UserForm';
import { BlogProvider } from './BlogContext';
import Blog from './pages/Blog';

function App() {

  return (
    <BlogProvider>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog/:postId' element={<Blog />}></Route>
            <Route path='/blog/create' element={<Create />}></Route>
            <Route path='/user/login' element={<UserForm />}></Route>
          </Routes>
      </div>
    </BlogProvider>
  );
}

export default App;
