import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service';
import './NavBar.css'; // Import the navbar.css file for styles

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  // Capitalize the first letter of the user's name
  const capitalizedUserName = user.name.charAt(0).toUpperCase() + user.name.slice(1);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        {/* <Link to="/wishlist">Wishlist</Link> */}

        {user._id === "64aea2a5e8e58477bbcc85f7" && (
          <Link to="/updateitem">Update Item</Link>
          
        )}

{user._id === "64aea2a5e8e58477bbcc85f7" && (
          <Link to="/itemform">Add Item</Link>
          
        )}
      </div>

      <div className="navbar-right">
        <span>Welcome, {capitalizedUserName}</span>
        <Link to="" onClick={handleLogOut} className="logout-link">
          Log Out
        </Link>
      </div>
    </nav>
  );
};