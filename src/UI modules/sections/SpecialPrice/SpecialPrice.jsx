import React from 'react';
import cl from './SpecialPrice.module.scss';
import '../../../styles/App.scss';
import MyButton from '../../button-main/MyButton';
import ProductsSlider from '../ProductsSlider/ProductsSlider';

function SpecialPrice(props) {
    return (
        <div className={cl.specialPrice}>
            <div className='container'>
                <div className='sectionTitleContainer'>
                    <div className='titleSecondary'>
                        <h2>Preț Special</h2>
                    </div>
                    <div className='titleDescription'>
                        <p>
                            Profitați de reduceri exclusive la instrumente de calitate superioară, prezentate în slider-ul nostru cu oferte limitate!
                        </p>
                    </div>
                </div>
                <ProductsSlider />
            </div>
        </div>
    );
}

export default SpecialPrice;