import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import './components.css';

const NavBar = () => (
  <header className="header">
    <div className="nav">
      <h1>BookStore</h1>

      <ul className="navlink">
        <li><Link to="/">Books</Link></li>
        <li><Link to="/catagories">Catagories</Link></li>
      </ul>
    </div>
    <button type="button" className="icon">
      <BsFillPersonFill />
    </button>
  </header>
);

export default NavBar;
