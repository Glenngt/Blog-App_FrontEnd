import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddPost from './components/AddPost';
import ViewAllPost from './components/ViewAllPost';
import ViewMyPost from './components/ViewMyPost';
import Register from './components/Register';
import UserProfile from './components/UserProfile';

function App() {
  return (

    <BrowserRouter>

        <Routes>

            <Route path = '' element={<Login/>} />
            <Route path = '/Register' element={<Register/>} />
            <Route path = '/Add' element={<AddPost/>} />
            <Route path = '/ViewAll' element={<ViewAllPost/>} />
            <Route path = '/View' element={<ViewMyPost/>} />
            <Route path = '/profile' element={<UserProfile/>} />


        </Routes>

    </BrowserRouter>

  );
}

export default App;
