import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div>
        <NavLink className="logo" to="/math-magicians">
          Math Magicians
        </NavLink>
      </div>
      <ul className="navigation">
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/math-magicians">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Calculator"
          >
            <p>Calculator</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Quote"
          >
            <p>Quote</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
