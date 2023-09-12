import React, { useState } from 'react';


const data =

    {
        "fundacje": [
            {
                "title": "Fundacja Dzieciom",
                "subtitle": "Pomoc dla potrzebujących dzieci",
                "desc": "Nasza fundacja działa na rzecz wsparcia dzieci w trudnej sytuacji życiowej. Organizujemy zbiórki, eventy i warsztaty dla najmłodszych."
            },
            {
                "title": "Fundacja Bezdomnym",
                "subtitle": "Wsparcie dla osób bezdomnych",
                "desc": "Dążymy do tego, aby każda osoba bezdomna znalazła schronienie i wsparcie, które pozwoli jej wrócić do normalnego życia."
            }
        ],
        "organizacje": [
            {
                "title": "Organizacja Przyroda",
                "subtitle": "Ochrona środowiska naturalnego",
                "desc": "Zajmujemy się ochroną przyrody i edukacją ekologiczną. Pomagamy w utrzymaniu równowagi ekosystemów lokalnych."
            },
            {
                "title": "Organizacja Edukacja",
                "subtitle": "Wsparcie edukacyjne dla młodzieży",
                "desc": "Oferujemy programy edukacyjne i stypendia dla zdolnej młodzieży z ubogich rodzin."
            }
        ],
        "lokalne": [
            {
                "title": "Lokalna Inicjatywa Parkowa",
                "subtitle": "Zadbajmy o nasze zielone miejsca",
                "desc": "Działamy na rzecz zachowania i rozbudowy miejsc zielonych w naszym mieście. Organizujemy akcje sadzenia drzew i dbania o parki."
            },
            {
                "title": "Lokalne Centrum Kultury",
                "subtitle": "Szerzenie kultury w naszym regionie",
                "desc": "Promujemy lokalnych artystów i organizujemy wydarzenia kulturalne dla mieszkańców naszego miasta."
            }
        ]
    }



const Who = () => {
    const [selectedCategory, setSelectedCategory] = useState("fundacje");

    return (
        <>
            <div id="targetElement2" className="mainwho">
                <div className="mainboxwho">
                    <p className="title">Komu pomagamy?</p>
                    <div className="dec"></div>
                    <div className="btns">
                        <button className="button" onClick={() => setSelectedCategory('fundacje')}>Fundacjom</button>
                        <button className="button" onClick={() => setSelectedCategory('organizacje')}>Organizacjom pozarządowym</button>
                        <button className="button" onClick={() => setSelectedCategory('lokalne')}>Lokalnym zbiórkom</button>
                    </div>
                    <p className="des">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                    <div className="mainrender">
                        {selectedCategory && data[selectedCategory].map(item => (
                            <div className="main" key={item.title}>
                                <p className="title">{item.title}</p>
                                <p className="subtitle">{item.subtitle}</p>
                                <p className="desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="nums">
                        {selectedCategory === 'fundacje' &&
                            [1, 2, 3].map(number => (
                                 <div className="square" key={number}>{number}</div>


                            ))
                        }
                        {selectedCategory === 'organizacje' &&
                            [1, 2].map(number => (
                                   <div className="square" key={number}>{number}</div>


                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Who;
