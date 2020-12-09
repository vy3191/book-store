import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="components-header">
      <p>Logo</p>
      <nav>
         <NavLink exact replace to="/home">Home</NavLink>
         <NavLink exact replace to="/book-store">Book Store</NavLink>
         <NavLink exact replace to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header;
