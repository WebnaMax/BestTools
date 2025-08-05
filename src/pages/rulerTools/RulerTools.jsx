import React, { useEffect } from 'react';
import '../../styles/App.scss';
import productLaserRuler from '../../images/laserRuler.png';
import HeaderCatalog from '../../UI modules/parts/headerCatalog/HeaderCatalog';
import { Link } from 'react-router';

function RulerTools(props) {
    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасывает прокрутку в начало страницы
    }, []); // Пустой массив зависимостей запускает эффект только при монтировании
    return (
        <div className='toolsCategories'>
            <HeaderCatalog />
            <div className='container' style={{ width: '100%' }}>
                <div className='sectionTitleContainer toolsCategoriesTitle'>
                    <div className='titleSecondary'>
                        <h2>Instrumente Noastre de Măsurare</h2>
                    </div>
                    <div className='titleDescrition'>
                        <p>
                            Explorează gama noastră de instrumente precise, ideale pentru măsurători profesionale și construcții.
                        </p>
                    </div>
                </div>
                <div className='toolsCategoriesContainer'>
                    <div className='toolsCategoriesProduct' style={{ width: '40%' }}>
                        <Link to='/rulerTools/Measuring' className='toolsCategoriesProductItem'>
                            <div className='toolsCategoriesProductImage'>
                                <img src={productLaserRuler} alt="Nivelă cu laser"/>
                            </div>
                            <div className='cardTitleSecondary'>
                                <h3>Nivelă cu laser</h3>
                            </div>
                            <div className='cardDescriptionSecondary'>
                                <p>Include nivele cu laser performante. Ideale pentru măsurarea precisă în gospodărie și lucrări profesionale.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RulerTools;