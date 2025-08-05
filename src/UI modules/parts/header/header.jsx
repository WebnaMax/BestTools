import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import MyButton from '../../button-main/MyButton';
import cl from './header.module.scss';
import '../../../styles/App.scss';

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const checkboxRef = useRef(null);
  const labelRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  // Обработчик клика вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        checkboxRef.current &&
        !checkboxRef.current.contains(event.target) &&
        labelRef.current &&
        !labelRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        checkboxRef.current.checked = false;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Управление прокруткой
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isMenuOpen]);

  const handleCheckboxChange = (event) => {
    event.stopPropagation(); // Предотвращаем срабатывание handleClickOutside
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    checkboxRef.current.checked = false;
  };

  return (
    <header className={`${cl.header} ${isScrolled ? '' : cl.transparent}`}>
      <div className={cl.headerContainer}>
        <div className={cl.headerLogo}>BestTools</div>
        <ul className={cl.headerNavigation}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={cl.headerNavigationLink}
              activeClass={cl.active}
            >
              Acasă
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={cl.headerNavigationLink}
              activeClass={cl.active}
            >
              Despre noi
            </Link>
          </li>
          <li>
            <Link
              to="products"
              smooth={true}
              duration={500}
              className={cl.headerNavigationLink}
              activeClass={cl.active}
            >
              Produse
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className={cl.headerNavigationLink}
              activeClass={cl.active}
            >
              Întrebări frecvente
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className={cl.headerNavigationLink}
              activeClass={cl.active}
            >
              Contacte
            </Link>
          </li>
        </ul>
        <div className={cl.headerButton}>
          <MyButton size="medium" color="primary">Cumpără Acum</MyButton>
        </div>
        <div className={cl.hamburgerMenu}>
          <input
            type="checkbox"
            id="burger-checkbox"
            className={cl.burgerCheckbox}
            ref={checkboxRef}
            checked={isMenuOpen}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="burger-checkbox" className={cl.burger} ref={labelRef}></label>
          <ul ref={menuRef} className={`${cl.menuList} ${isMenuOpen ? cl.active : ''}`}>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={cl.menuItem}
                onClick={handleMenuItemClick}
              >
                Acasă
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={cl.menuItem}
                onClick={handleMenuItemClick}
              >
                Despre noi
              </Link>
            </li>
            <li>
              <Link
                to="products"
                smooth={true}
                duration={500}
                className={cl.menuItem}
                onClick={handleMenuItemClick}
              >
                Produse
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className={cl.menuItem}
                onClick={handleMenuItemClick}
              >
                Întrebări frecvente
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                className={cl.menuItem}
                onClick={handleMenuItemClick}
              >
                Contacte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;