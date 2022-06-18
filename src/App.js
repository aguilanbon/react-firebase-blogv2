import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import UserForm from './pages/UserForm';
import { BlogProvider } from './BlogContext';
import Blog from './pages/Blog';
import Edit from './pages/Edit';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <BlogProvider>
      <div className="App">
        <Toaster />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog/:postId' element={<Blog />}></Route>
            <Route path='/blog/edit/:postId' element={<Edit />}></Route>
            <Route path='/blog/create' element={<Create />}></Route>
            <Route path='/user/login' element={<UserForm />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        <Footer />
      </div>
    </BlogProvider>
  );
}

export default App;
