import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import Catagories from './pages/Catagorypage';
import Boookpage from './pages/Bookpage';

const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Boookpage />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
