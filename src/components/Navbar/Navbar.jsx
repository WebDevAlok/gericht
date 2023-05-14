import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='App Logo'/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home' alt='Home Link'>Home</a></li>
        <li className='p__opensans'><a href='#home' alt='About Link'>About</a></li>
        <li className='p__opensans'><a href='#home' alt='Menu Link'>Menu</a></li>
        <li className='p__opensans'><a href='#home' alt='Awards Link'>Awards</a></li>
        <li className='p__opensans'><a href='#home' alt='Contact Link'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans' alt='Login or Register'>Login / Register</a>
        <div></div>
        <a href='/' className='p__opensans' alt='Book Table'>Book Table</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setMenuToggle(true)}/>

        {menuToggle && (
          <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={() => setMenuToggle(false)}/>
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><a href='#home' alt='Home Link'>Home</a></li>
              <li className='p__opensans'><a href='#home' alt='About Link'>About</a></li>
              <li className='p__opensans'><a href='#home' alt='Menu Link'>Menu</a></li>
              <li className='p__opensans'><a href='#home' alt='Awards Link'>Awards</a></li>
              <li className='p__opensans'><a href='#home' alt='Contact Link'>Contact</a></li>
            </ul>
          </div> )
        }
      </div>
    </nav>
  )
};

export default Navbar;
