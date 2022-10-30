import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import { CartProvider } from './contexts/useCards';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route exact path="/" element={ <Main /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <Register /> } />
      </Routes>
    </CartProvider>
  );
}

export default App;
