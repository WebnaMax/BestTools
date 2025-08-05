import React from 'react';
import cl from './MyButton.module.scss';
import { Link } from 'react-scroll';

function MyButton({ children, size = 'large', color = 'primary', ...props }) {
    const getScrollTarget = () => {
        switch (color) {
            case 'primary':
                return 'products';   // Пример: Cumpără Acum
            case 'secondary':
                return 'about';   // Пример: Află Mai Multe
            default:
                return 'home';
        }
    };

    const className = `${cl.myButton} ${cl[`myButton--${size}`]} ${cl[`myButton--${color}`]}`;

    return (
        <Link to={getScrollTarget()} smooth={true} duration={500}>
            <button className={className} {...props}>
                {children}
            </button>
        </Link>
    );
}

export default MyButton;
