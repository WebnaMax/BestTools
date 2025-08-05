import React from 'react';
import cl from './MyButton.module.scss'; 
import { Link } from 'react-scroll';

function MyButton({ children, size = 'large', color = 'primary', ...props }) {

    const getSection = () => {
    switch (color) {
      case 'primary':
        return 'products'; // Секция для синей кнопки
      case 'secondary':
        return 'about'; // Секция для белой кнопки
      default:
        return 'products'; // Значение по умолчанию
    };
    // switch (size) {
    //     case 'large';
    //         return 'products';
    //     case 'medium'
    //         return 'products'
    //     case 'small'
    //         return ''
    // };
  };

    return (
        <div>
            <Link
                to={getSection()}
                smooth={true}
                duration={500}
            >
                <button className={`${cl.myButton} ${cl[`myButton--${size}`]} ${cl[`myButton--${color}`]}`} {...props}>
                    {children}
                </button>
            </Link>
        </div>
    );
}

export default MyButton;