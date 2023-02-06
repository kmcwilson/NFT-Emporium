import React, {useState} from 'react';
import {HiFire} from 'react-icons/hi'
import {NavLink} from 'react-router-dom';
import { HiMenu as Hamburger} from 'react-icons/hi';
import './Navigation.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const closeNavBar= ()=> setShowNavbar(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to='/'style={{color:'whitesmoke'}} ><HiFire /> NFT Emporium </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger style={{color:'whitesmoke'}} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/ournfts"  onClick={closeNavBar}>Our Nfts</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist" onClick={closeNavBar}>My Wish List</NavLink>
            </li>
            <li>
              <NavLink to="/checkout"onClick={closeNavBar}>Checkout</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeNavBar}>About</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up"onClick={closeNavBar}>Login/Sign-up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar






// Previous navbar that didn't render properly

// import React, { useState } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';


// function Navbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);


//   return (
//     <>
//       <nav className='navbar'>
//         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//           NFT Emporium
//         </Link>
//         <div className='menu-icon' onClick={handleClick}>
//           <li className={click ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/wishlist'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               My Wish List
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/about'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               About
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/Checkout'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Checkout
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Button
//               to='/sign-up'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Logout
//             </Button>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/sign-up'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Login/Sign Up
//             </Link>
//           </li>
//         </ul>
//         {/* <Button /> */}
//       </nav>
//     </>
//   );
// }

// export default Navbar;
