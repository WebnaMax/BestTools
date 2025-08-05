import React, { useEffect } from 'react';
import '../../styles/App.scss';
import '../../styles/toolsCategories.scss'
import imageDrujbe from '../../images/drujbe.png';
import imageMotocoase from '../../images/motocoase.png';
import imageGenerators from '../../images/generator.png';
import HeaderCatalog from '../../UI modules/parts/headerCatalog/HeaderCatalog';
import { Link } from 'react-router';

function GasolineTools(props) {

    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасывает прокрутку в начало страницы
    }, []); // Пустой массив зависимостей запускает эффект только при монтировании

    const subcategories = [
        { image: imageDrujbe, link: '/gasolineTools/Chainsaws', name: 'Drujbe', description: 'Include fierăstraie performante. Ideale pentru tăierea lemnului în gospodărie și lucrări profesionale.' },
        { image: imageMotocoase, link: '/gasolineTools/BrushCutters', name: 'Motocoase', description: 'Include motocoase performante. Perfecte pentru lucrări de grădinărit și întreținerea terenurilor.' },
        { image: imageGenerators, link: '/gasolineTools/Generators', name: 'Generatoare', description: 'Include generatoare. Potrivite pentru șantiere și zone fără acces la rețea.' },
    ];

    return (
        <div className='toolsCategories'>
            <HeaderCatalog />
            <div className='container' style={{ width: '100%' }}>
                <div className='sectionTitleContainer toolsCategoriesTitle'>
                    <div className='titleSecondary'>
                        <h2>Unelte Noastre Pe Benzină</h2>
                    </div>
                    <div className='titleDescrition'>
                        <p>
                            Explorați gama noastră de unelte pe benzină, de la drujbe robuste și motocoase versatile la generatoare fiabile, echipate cu motoare puternice, ideale pentru profesioniști și pasionați, oferind eficiență și autonomie fără priză.
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

export default GasolineTools;