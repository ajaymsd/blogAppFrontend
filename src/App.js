import './styles/style.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import AddBlog from './pages/AddBlog';
import AddCategory from './pages/AddCategory';
import SingleBlog from './pages/SingleBlog';
import ProtectedRoutes from './services/ProtectedRoutes';
import Home2 from './pages/Home2';
function App() {
  return (
    <>
    <Header></Header>
     <Routes>
        <Route path="/" element={<Home2/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        {/*Protected Routes */}
       <Route path="/" element={<ProtectedRoutes/>}> 
       <Route path="/userblog" element={<Home/>}/>
        
        <Route path="/add-blog" element={<AddBlog/>}/>
        <Route path="/add-category" element={<AddCategory/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
        </Route>
     </Routes>
    </>
  );
}

export default App;
