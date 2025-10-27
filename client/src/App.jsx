import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </>

  );
}

export default App;
