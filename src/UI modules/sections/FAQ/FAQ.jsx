import React, { useState } from 'react';
import cl from './FAQ.module.scss';
import '../../../styles/App.scss';

function FAQ(props) {
  // Состояние для хранения индекса активного элемента
  const [activeIndex, setActiveIndex] = useState(null);

  // Функция переключения состояния элемента
  const toggleItem = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cl.faqSection} id='faq'>
      <div className="container">
        <div className="sectionTitleContainer">
          <div className="titleSecondary">
            <h2>Întrebări Frecvente</h2>
          </div>
          <div className="titleDescription">
            <p>
              Găsește răspunsuri la întrebările comune despre produsele și serviciile noastre
            </p>
          </div>
        </div>
        <div className={cl.faqAcordion}>
          {[
            {
              title: 'Ce mărci comercializați?',
              description:
                'Oferim o selecție largă de mărci de unelte premium, inclusiv DeWalt, Milwaukee, Makita, Bosch, Stanley, Craftsman și multe altele. Toate mărcile sunt atent selectate pentru calitatea, fiabilitatea și performanța lor de nivel profesional.',
            },
            {
              title: 'Oferiți garanții pentru uneltele dumneavoastră?',
              description:
                'Da, toate uneltele noastre vin cu garanții de la producător, care variază în funcție de marcă și produs. Majoritatea uneltelor includ o garanție de la 1 la 3 ani, iar unele mărci premium oferă garanții extinse. Pentru detalii specifice, verificați descrierea produsului sau contactați echipa noastră de suport.',
            },
            {
              title: 'Care este politica dumneavoastră de returnare?',
              description:
                'Oferim o politică de returnare de 30 de zile pentru majoritatea produselor, cu condiția ca acestea să fie nefolosite și în ambalajul original. Pentru a iniția o returnare, contactați echipa noastră de asistență pentru clienți, care vă va ghida prin proces. Anumite articole, cum ar fi produsele personalizate sau cele aflate în lichidare, pot avea restricții de returnare.',
            },
            {
              title: 'Oferiți prețuri pentru achiziții în vrac pentru antreprenori?',
              description:
                'Da, oferim reduceri pentru achiziții în vrac destinate antreprenorilor și profesioniștilor. Vă rugăm să contactați echipa noastră de vânzări pentru a discuta despre nevoile dumneavoastră specifice și pentru a primi o ofertă personalizată.',
            },
            {
              title: 'Cât de rapidă este livrarea dumneavoastră?',
              description:
                'Majoritatea comenzilor sunt expediate în termen de 24 de ore de la plasare și ajung în 2-3 zile lucrătoare, în funcție de locație. Utilizăm o rețea de livrare eficientă pentru a asigura timpi de expediere rapizi. Pentru detalii exacte privind livrarea, verificați informațiile de expediere la finalizarea comenzii.',
            },
            {
              title: 'Mă puteți ajuta să aleg uneltele potrivite pentru proiectul meu?',
              description:
                'Absolut! Echipa noastră de experți este disponibilă pentru a oferi recomandări personalizate în funcție de cerințele proiectului dumneavoastră. Contactați-ne prin telefon, e-mail sau chat live, și vă vom ajuta să selectați uneltele ideale pentru nevoile dumneavoastră.',
            },
          ].map((item, index) => (
            <div 
                key={index} 
                className={cl.faqItem} 
                onClick={() => toggleItem(index)}
            >
              <div className={cl.faqItemTitle}>
                <div className="cardTitleSecondary">
                  <h3>{item.title}</h3>
                </div>
                <button
                  className={cl.toggleButton}
                  onClick={() => toggleItem(index)}
                >
                  {activeIndex === index ? '−' : '+'}
                </button>
              </div>
              <div
                className={`cardDescriptionSecondary ${cl.faqItemDescription}`}
                style={{ display: activeIndex === index ? 'block' : 'none' }}
              >
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;