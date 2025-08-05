import React, { useEffect } from 'react';
import '../../styles/App.scss';
import productTaiere from '../../images/treeWork.png';
import productGaurie from '../../images/shurik.png';
import productSlefuire from '../../images/shlifovka.png';
import productFrezers from '../../images/frezers.png';
import productStroitlmie from '../../images/stroitelnie.png';
import HeaderCatalog from '../../UI modules/parts/headerCatalog/HeaderCatalog';
import { Link } from 'react-router';

function ElectroTools(props) {

    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасывает прокрутку в начало страницы
    }, []); // Пустой массив зависимостей запускает эффект только при монтировании

    const subcategories = [
        { image: productTaiere, link: '/electroTools/CuttingTools', name: 'Unelte pentru tăiere și debitare', description: 'Include unelte. Utilizate pentru tăiere și prelucrarea materialelor în ateliere și pe șantier.' },
        { image: productGaurie, link: '/electroTools/DrillingAndFastening', name: 'Unelte pentru găurire și înșurubare', description: 'Include unelte. Ideal pentru găurire precisă și înșurubare în proiecte casnice și industriale.' },
        { image: productSlefuire, link: '/electroTools/GrindingAndPolishing', name: 'Unelte pentru șlefuire și lustruire', description: 'Include unelte. Perfecte pentru șlefuire și lustruire în renovări și decor.' },
        { image: productFrezers, link: '/electroTools/WoodWorking', name: 'Unelte pentru prelucrarea lemnului și a altor materiale', description: 'Include unelte. Potrivite pentru lucrări de tâmplărie și prelucrarea diverselor materiale.' },
        { image: productStroitlmie, link: '/electroTools/ConstructionAndFinishing', name: 'Unelte pentru lucrări de construcții și finisaje', description: 'Include unelte. Utilizate pentru construcții și finisaje interioare.' },
    ];

    return (
        <div className='toolsCategories'>
            <HeaderCatalog />
            <div className='container'>
                <div className='sectionTitleContainer toolsCategoriesTitle'>
                    <div className='titleSecondary'>
                        <h2>Unelte Noastre Electrice</h2>
                    </div>
                    <div className='titleDescrition'>
                        <p>
                            Descoperă gama noastră de unelte electrice eficiente, perfecte pentru diverse lucrări profesionale și casnice.
                        </p>
                    </div>
                </div>
                <div className='toolsCategoriesContainer'>
                    {subcategories.map((subcategory, index) => (
                        <div className='toolsCategoriesProduct'>
                            <Link to={subcategory.link} className='toolsCategoriesProductItem'>
                                <div className='toolsCategoriesProductImage'>
                                    <img src={subcategory.image} />
                                </div>
                                <div className='cardTitleSecondary'>
                                    <h3>{subcategory.name}</h3>
                                </div>
                                <div className='cardDescriptionSecondary'>
                                    <p>{subcategory.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ElectroTools;