import React from 'react';
import cl from './OurProducts.module.scss';
import '../../../styles/App.scss';
import MyButton from '../../button-main/MyButton';
import productDrujbe from '../../../images/drujbe.png';
import productMotocoase from '../../../images/motocoase.png';
import productGeneratoare from '../../../images/generator.png';
import productTaiere from '../../../images/treeWork.png';
import productGaurie from '../../../images/shurik.png';
import productSlefuire from '../../../images/shlifovka.png';
import productFrezers from '../../../images/frezers.png';
import productStroitlmie from '../../../images/stroitelnie.png';
import { Link } from 'react-router';

function OurProducts(props) {

    const categories = [
        {image: productDrujbe, link: '/gasolineTools/Chainsaws', name: 'Drujbe', description: 'Include fierăstraie performante. Ideale pentru tăierea lemnului în gospodărie și lucrări profesionale.'}, 
        {image: productMotocoase, link: '/gasolineTools/BrushCutters', name: 'Motocoase', description: 'Include motocoase performante. Perfecte pentru lucrări de grădinărit și întreținerea terenurilor.'}, 
        {image: productGeneratoare, link: '/gasolineTools/Generators', name: 'Generatoare', description: 'Include generatoare. Potrivite pentru șantiere și zone fără acces la rețea.'}, 
        {image: productTaiere, link: '/electroTools/CuttingTools', name: 'Unelte pentru tăiere și debitare', description: 'Include unelte. Utilizate pentru tăiere și prelucrarea materialelor în ateliere și pe șantier.'}, 
        {image: productGaurie, link: '/electroTools/DrillingAndFastening', name: 'Unelte pentru găurire și înșurubare', description: 'Include unelte. Ideal pentru găurire precisă și înșurubare în proiecte casnice și industriale.'}, 
        {image: productSlefuire, link: '/electroTools/GrindingAndPolishing', name: 'Pentru șlefuire și lustruire', description: 'Include unelte. Perfecte pentru șlefuire și lustruire în renovări și decor.'}, 
        {image: productFrezers, link: '/electroTools/WoodWorking', name: 'Unelte pentru prelucrarea lemnului și a altor materiale', description: 'Include unelte. Potrivite pentru lucrări de tâmplărie și prelucrarea diverselor materiale.'}, 
        {image: productStroitlmie, link: '/electroTools/ConstructionAndFinishing', name: 'Unelte pentru lucrări de construcții și finisaje', description: 'Include unelte. Utilizate pentru construcții și finisaje interioare.'}, 
    ]

    return (
        <div className={cl.ourProducts} id='products'>
            <div className='container'>
                <div className={'sectionTitleContainer'}>
                    <div className='titleSecondary'>
                        <h2>Produsele Noastre</h2>
                    </div>
                    <div className='titleDescription'>
                        <p>
                         Descoperă cele mai vândute unelte ale noastre, de încredere pentru profesioniști din întreaga lume.
                        </p>
                    </div>
                </div>
                <div className={cl.ourProductsContainer}>
                    {categories.map((category, index) => (
                        <div className={cl.ourProductsItem}>
                            <Link to={category.link} className={cl.ourProductsItemLink}>
                                <div className={cl.ourProductsItemImage}>
                                    <img src={category.image} alt="Product `${category.name}`" />
                                </div>
                                <div className="cardTitleSecondary">
                                    <h3 style={{ textAlign: "left" }}>{category.name}</h3>
                                </div>
                                <div className="cardDescriptionSecondary">
                                    <p style={{ textAlign: "left" }}>{category.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {/* <div className={cl.ourProductsItem}>
                        <Link to='/gasolineTools/BrushCutters'>
                            <div className={cl.ourProductsItemImage}>
                                <img src={productMotocoase} alt="Product Motocoase" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Motocoase</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include motocoase performante. Perfecte pentru lucrări de grădinărit și întreținerea terenurilor.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cl.ourProductsItem}>
                        <Link to='/gasolineTools/Generators'>
                            <div className={cl.ourProductsItemImage}>
                                <img src={productGeneratoare} alt="Product Generatoare" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Generatoare</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include generatoare. Potrivite pentru șantiere și zone fără acces la rețea.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cl.ourProductsItem}>
                        <Link to='/electroTools/CuttingTools'>
                            <div className={cl.ourProductsItemImage}>
                                <img src={productTaiere} alt="Product Taiere" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Unelte pentru tăiere și debitare</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include unelte. Utilizate pentru tăiere și prelucrarea materialelor în ateliere și pe șantier.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cl.ourProductsItem}>
                        <Link to='/electroTools/DrillingAndFastening'>
                            <div className={cl.ourProductsItemImage}>
                                <img src={productGaurie} alt="Product Gaurie" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Unelte pentru găurire și înșurubare</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include unelte. Ideal pentru găurire precisă și înșurubare în proiecte casnice și industriale.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cl.ourProductsItem}>
                        <Link to='/electroTools/GrindingAndPolishing'>
                            <div className={cl.ourProductsItemImage}>
                                <img src={productSlefuire} alt="Product Slefuire" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Pentru șlefuire și lustruire</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include unelte. Perfecte pentru șlefuire și lustruire în renovări și decor.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cl.ourProductsItem}>
                        <Link to='/electroTools/WoodWorking'>
                            <div className={cl.ourProductsItemImage}>
                                <img src={productFrezers} alt="Product Frezers" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Unelte pentru prelucrarea lemnului și a altor materiale</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include unelte. Potrivite pentru lucrări de tâmplărie și prelucrarea diverselor materiale.</p>
                            </div>
                        </Link>
                    </div>
                    <div className={cl.ourProductsItem}>
                        <Link to='/electroTools/ConstructionAndFinishing'>
                            <div className={cl.ourProductsItemImage} style={{maxHeight: '200px'}}>
                                <img src={productStroitlmie} alt="Product Constructie" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3 style={{ textAlign: "center" }}>Unelte pentru lucrări de construcții și finisaje</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p style={{ textAlign: "center" }}>Include unelte. Utilizate pentru construcții și finisaje interioare.</p>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default OurProducts;