/* =====================================================
   KERVAQ
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const translations = {

    de: {

        navSolutions: "Lösungen",
        navAbout: "Über uns",
        navContact: "Kontakt",
        navStart: "Starten",

        heroBadge:
            "Intelligente Technologie für moderne Unternehmen",

        heroTitleOne:
            "Bringen Sie Ihr",

        heroTitleTwo:
            "Unternehmen voran.",

        heroText:
            "KERVAQ entwickelt intelligente Software, automatisiert Prozesse und reduziert unnötige Arbeit – damit Unternehmen mehr Zeit für Wachstum haben.",

        heroButtonOne:
            "Lösungen entdecken",

        heroButtonTwo:
            "KERVAQ entdecken",

        statOne:
            "Intelligente Systeme",

        statTwo:
            "Automatisierte Prozesse",

        statThree:
            "Wachstum ermöglichen",

        introLabel:
            "UNSERE MISSION",

        introTitle:
            "Unternehmen sollen vorankommen.",

        introText:
            "Zu viel Zeit geht in Unternehmen durch wiederkehrende Aufgaben, komplizierte Abläufe und unnötige manuelle Arbeit verloren. KERVAQ setzt genau dort an.",

        solutionsLabel:
            "WAS WIR TUN",

        solutionsTitle:
            "Technologie, die Probleme löst.",

        solutionsText:
            "Wir verbinden Automatisierung, intelligente Systeme und moderne Software, um Unternehmen einfacher und effizienter zu machen.",

        cardOneTitle:
            "Automatisierung",

        cardOneText:
            "Wiederkehrende Arbeit wird zu intelligenten, automatisierten Prozessen.",

        cardOneDetails:
            "KERVAQ hilft dabei, manuelle Abläufe zu reduzieren und Prozesse effizienter zu gestalten.",

        cardOnePointOne:
            "Wiederkehrende Aufgaben automatisieren",

        cardOnePointTwo:
            "Manuelle Arbeit reduzieren",

        cardOnePointThree:
            "Prozesse beschleunigen",

        cardOnePointFour:
            "Fehlerquellen reduzieren",

        cardTwoTitle:
            "Intelligenz",

        cardTwoText:
            "Intelligente Technologien helfen Unternehmen, Informationen besser zu nutzen und Prozesse neu zu denken.",

        cardTwoDetails:
            "Moderne KI-Systeme können Informationen analysieren, Aufgaben unterstützen und neue Möglichkeiten schaffen.",

        cardTwoPointOne:
            "Informationen intelligenter nutzen",

        cardTwoPointTwo:
            "Daten automatisch verarbeiten",

        cardTwoPointThree:
            "Arbeitsabläufe unterstützen",

        cardTwoPointFour:
            "Neue digitale Möglichkeiten schaffen",

        cardThreeTitle:
            "Software",

        cardThreeText:
            "Digitale Lösungen, die genau zu den Herausforderungen eines Unternehmens passen.",

        cardThreeDetails:
            "Wenn Standardlösungen nicht ausreichen, entwickelt KERVAQ individuelle digitale Systeme.",

        cardThreePointOne:
            "Individuelle Softwarelösungen",

        cardThreePointTwo:
            "Digitale Prozesse vereinfachen",

        cardThreePointThree:
            "Systeme miteinander verbinden",

        cardThreePointFour:
            "Lösungen für reales Wachstum",

        learnMore:
            "Mehr erfahren",

        processLabel:
            "DER KERVAQ-PROZESS",

        processTitle:
            "Vom Problem zur Lösung.",

        processOneTitle:
            "Verstehen",

        processOneText:
            "Wir verstehen zuerst das Problem, bevor wir über Technologie sprechen.",

        processTwoTitle:
            "Entwickeln",

        processTwoText:
            "Wir entwickeln eine Lösung, die zum Unternehmen und seinen Abläufen passt.",

        processThreeTitle:
            "Vereinfachen",

        processThreeText:
            "Unnötige Schritte werden reduziert und Prozesse werden intelligenter.",

        processFourTitle:
            "Vorankommen",

        processFourText:
            "Weniger Arbeit. Mehr Zeit. Mehr Möglichkeiten für Wachstum.",

        aboutLabel:
            "DER KERVAQ-ANSATZ",

        aboutTitleOne:
            "Einfacher.",

        aboutTitleTwo:
            "Schneller.",

        aboutTitleThree:
            "Weiter.",

        aboutTextOne:
            "Wir glauben, dass Technologie kein Selbstzweck sein sollte. Sie soll Menschen Arbeit abnehmen, Prozesse vereinfachen und Unternehmen dabei helfen, ihre Ziele schneller zu erreichen.",

        aboutTextTwo:
            "KERVAQ entwickelt Lösungen mit einem klaren Ziel: Unternehmen sollen mehr Zeit für das haben, was wirklich wichtig ist.",

        benefitsLabel:
            "WAS DABEI ENTSTEHT",

        benefitsTitle:
            "Mehr von dem, was zählt.",

        benefitOneTitle:
            "Weniger Arbeit",

        benefitOneText:
            "Weniger manuelle und wiederkehrende Aufgaben.",

        benefitTwoTitle:
            "Weniger Kosten",

        benefitTwoText:
            "Effizientere Abläufe schaffen neue Spielräume.",

        benefitThreeTitle:
            "Mehr Zeit",

        benefitThreeText:
            "Mehr Zeit für Kunden, Strategie und Wachstum.",

        benefitFourTitle:
            "Mehr Wachstum",

        benefitFourText:
            "Technologie schafft Raum für den nächsten Schritt.",

        contactLabel:
            "BEREIT FÜR DEN NÄCHSTEN SCHRITT?",

        contactTitle:
            "Lassen Sie uns etwas bewegen.",

        contactText:
            "Sie haben einen Prozess, der zu viel Zeit kostet? Erzählen Sie uns davon.",

        formName:
            "Name",

        formCompany:
            "Unternehmen",

        formEmail:
            "E-Mail",

        formMessage:
            "Wie können wir helfen?",

        formButton:
            "Anfrage senden",

        privacyLabel:
            "DATENSCHUTZ",

        privacyTitle:
            "Datenschutzerklärung",

        privacyText:
            "Diese Datenschutzerklärung ist derzeit als Platzhalter hinterlegt. Vor dem öffentlichen Betrieb von KERVAQ muss sie an die tatsächliche technische Umsetzung, die verwendeten Dienste, den Sitz des Unternehmens und die konkreten Datenverarbeitungen angepasst werden.",

        imprintLabel:
            "RECHTLICHES",

        imprintTitle:
            "Impressum",

        imprintText:
            "Das Impressum wird ergänzt, sobald die Unternehmensdaten von KERVAQ feststehen. Benötigt werden unter anderem Unternehmensname, Anschrift, vertretungsberechtigte Person und gegebenenfalls weitere Pflichtangaben.",

        privacyLink:
            "Datenschutz",

        imprintLink:
            "Impressum",

        footerText:
            "Technologie für den nächsten Schritt.",

        footerRights:
            "Alle Rechte vorbehalten."

    },


    en: {

        navSolutions:
            "Solutions",

        navAbout:
            "About",

        navContact:
            "Contact",

        navStart:
            "Get started",

        heroBadge:
            "Intelligent technology for modern businesses",

        heroTitleOne:
            "Move your",

        heroTitleTwo:
            "business forward.",

        heroText:
            "KERVAQ develops intelligent software, automates processes and reduces unnecessary work — giving businesses more time to grow.",

        heroButtonOne:
            "Explore solutions",

        heroButtonTwo:
            "Discover KERVAQ",

        statOne:
            "Intelligent systems",

        statTwo:
            "Automated processes",

        statThree:
            "Enabling growth",

        introLabel:
            "OUR MISSION",

        introTitle:
            "Businesses should move forward.",

        introText:
            "Too much time is lost to repetitive tasks, complicated workflows and unnecessary manual work. KERVAQ focuses exactly where those problems begin.",

        solutionsLabel:
            "WHAT WE DO",

        solutionsTitle:
            "Technology that solves problems.",

        solutionsText:
            "We combine automation, intelligent systems and modern software to make businesses simpler and more efficient.",

        cardOneTitle:
            "Automation",

        cardOneText:
            "Turn repetitive work into intelligent, automated processes.",

        cardOneDetails:
            "KERVAQ helps reduce manual workflows and make processes more efficient.",

        cardOnePointOne:
            "Automate repetitive tasks",

        cardOnePointTwo:
            "Reduce manual work",

        cardOnePointThree:
            "Accelerate processes",

        cardOnePointFour:
            "Reduce sources of error",

        cardTwoTitle:
            "Intelligence",

        cardTwoText:
            "Intelligent technologies help businesses use information better and rethink their processes.",

        cardTwoDetails:
            "Modern AI systems can analyze information, support tasks and create new possibilities.",

        cardTwoPointOne:
            "Use information more intelligently",

        cardTwoPointTwo:
            "Process data automatically",

        cardTwoPointThree:
            "Support workflows",

        cardTwoPointFour:
            "Create new digital possibilities",

        cardThreeTitle:
            "Software",

        cardThreeText:
            "Digital solutions designed around the real challenges of a business.",

        cardThreeDetails:
            "When standard solutions are not enough, KERVAQ develops custom digital systems.",

        cardThreePointOne:
            "Custom software solutions",

        cardThreePointTwo:
            "Simplify digital processes",

        cardThreePointThree:
            "Connect systems",

        cardThreePointFour:
            "Build solutions for real growth",

        learnMore:
            "Learn more",

        processLabel:
            "THE KERVAQ PROCESS",

        processTitle:
            "From problem to solution.",

        processOneTitle:
            "Understand",

        processOneText:
            "We understand the problem first, before talking about technology.",

        processTwoTitle:
            "Develop",

        processTwoText:
            "We develop a solution that fits the business and its workflows.",

        processThreeTitle:
            "Simplify",

        processThreeText:
            "Unnecessary steps are reduced and processes become smarter.",

        processFourTitle:
            "Move forward",

        processFourText:
            "Less work. More time. More opportunities for growth.",

        aboutLabel:
            "THE KERVAQ APPROACH",

        aboutTitleOne:
            "Simpler.",

        aboutTitleTwo:
            "Faster.",

        aboutTitleThree:
            "Forward.",

        aboutTextOne:
            "We believe technology should not exist for its own sake. It should take work away from people, simplify processes and help businesses reach their goals faster.",

        aboutTextTwo:
            "KERVAQ builds solutions with one clear goal: giving businesses more time for what really matters.",

        benefitsLabel:
            "WHAT IT CREATES",

        benefitsTitle:
            "More of what matters.",

        benefitOneTitle:
            "Less work",

        benefitOneText:
            "Fewer manual and repetitive tasks.",

        benefitTwoTitle:
            "Lower costs",

        benefitTwoText:
            "More efficient workflows create new opportunities.",

        benefitThreeTitle:
            "More time",

        benefitThreeText:
            "More time for customers, strategy and growth.",

        benefitFourTitle:
            "More growth",

        benefitFourText:
            "Technology creates room for the next step.",

        contactLabel:
            "READY FOR THE NEXT STEP?",

        contactTitle:
            "Let's move something forward.",

        contactText:
            "Have a process that takes too much time? Tell us about it.",

        formName:
            "Name",

        formCompany:
            "Company",

        formEmail:
            "Email",

        formMessage:
            "How can we help?",

        formButton:
            "Send request",

        privacyLabel:
            "PRIVACY",

        privacyTitle:
            "Privacy Policy",

        privacyText:
            "This privacy policy is currently a placeholder. Before KERVAQ is publicly operated, it must be adapted to the actual technical implementation, services used, company location and specific data processing activities.",

        imprintLabel:
            "LEGAL",

        imprintTitle:
            "Legal Notice",

        imprintText:
            "The legal notice will be completed once KERVAQ's company details are established. This includes the company name, address, authorized representative and any other legally required information.",

        privacyLink:
            "Privacy",

        imprintLink:
            "Legal notice",

        footerText:
            "Technology for the next step.",

        footerRights:
            "All rights reserved."

    },


    fr: {

        navSolutions:
            "Solutions",

        navAbout:
            "À propos",

        navContact:
            "Contact",

        navStart:
            "Commencer",

        heroBadge:
            "Technologie intelligente pour les entreprises modernes",

        heroTitleOne:
            "Faites avancer",

        heroTitleTwo:
            "votre entreprise.",

        heroText:
            "KERVAQ développe des logiciels intelligents, automatise les processus et réduit le travail inutile — pour donner aux entreprises plus de temps pour grandir.",

        heroButtonOne:
            "Découvrir les solutions",

        heroButtonTwo:
            "Découvrir KERVAQ",

        statOne:
            "Systèmes intelligents",

        statTwo:
            "Processus automatisés",

        statThree:
            "Favoriser la croissance",

        introLabel:
            "NOTRE MISSION",

        introTitle:
            "Les entreprises doivent aller de l'avant.",

        introText:
            "Trop de temps est perdu à cause des tâches répétitives, des processus complexes et du travail manuel inutile. KERVAQ intervient précisément à ce niveau.",

        solutionsLabel:
            "CE QUE NOUS FAISONS",

        solutionsTitle:
            "La technologie qui résout les problèmes.",

        solutionsText:
            "Nous combinons automatisation, systèmes intelligents et logiciels modernes pour rendre les entreprises plus simples et plus efficaces.",

        cardOneTitle:
            "Automatisation",

        cardOneText:
            "Transformez le travail répétitif en processus intelligents et automatisés.",

        cardOneDetails:
            "KERVAQ aide à réduire les tâches manuelles et à rendre les processus plus efficaces.",

        cardOnePointOne:
            "Automatiser les tâches répétitives",

        cardOnePointTwo:
            "Réduire le travail manuel",

        cardOnePointThree:
            "Accélérer les processus",

        cardOnePointFour:
            "Réduire les sources d'erreur",

        cardTwoTitle:
            "Intelligence",

        cardTwoText:
            "Les technologies intelligentes permettent aux entreprises de mieux utiliser leurs informations et de repenser leurs processus.",

        cardTwoDetails:
            "Les systèmes d'IA modernes peuvent analyser les informations, assister certaines tâches et créer de nouvelles possibilités.",

        cardTwoPointOne:
            "Utiliser les informations intelligemment",

        cardTwoPointTwo:
            "Traiter automatiquement les données",

        cardTwoPointThree:
            "Améliorer les flux de travail",

        cardTwoPointFour:
            "Créer de nouvelles possibilités numériques",

        cardThreeTitle:
            "Logiciels",

        cardThreeText:
            "Des solutions numériques conçues pour répondre aux véritables défis d'une entreprise.",

        cardThreeDetails:
            "Lorsque les solutions standards ne suffisent pas, KERVAQ développe des systèmes numériques personnalisés.",

        cardThreePointOne:
            "Solutions logicielles personnalisées",

        cardThreePointTwo:
            "Simplifier les processus numériques",

        cardThreePointThree:
            "Connecter les systèmes",

        cardThreePointFour:
            "Créer des solutions pour la croissance",

        learnMore:
            "En savoir plus",

        processLabel:
            "LE PROCESSUS KERVAQ",

        processTitle:
            "Du problème à la solution.",

        processOneTitle:
            "Comprendre",

        processOneText:
            "Nous comprenons d'abord le problème avant de parler de technologie.",

        processTwoTitle:
            "Développer",

        processTwoText:
            "Nous développons une solution adaptée à l'entreprise et à ses processus.",

        processThreeTitle:
            "Simplifier",

        processThreeText:
            "Les étapes inutiles sont réduites et les processus deviennent plus intelligents.",

        processFourTitle:
            "Avancer",

        processFourText:
            "Moins de travail. Plus de temps. Plus de possibilités de croissance.",

        aboutLabel:
            "L'APPROCHE KERVAQ",

        aboutTitleOne:
            "Plus simple.",

        aboutTitleTwo:
            "Plus rapide.",

        aboutTitleThree:
            "Plus loin.",

        aboutTextOne:
            "Nous pensons que la technologie ne doit pas exister pour elle-même. Elle doit réduire le travail, simplifier les processus et aider les entreprises à atteindre leurs objectifs plus rapidement.",

        aboutTextTwo:
            "KERVAQ développe des solutions avec un objectif clair : donner aux entreprises plus de temps pour ce qui compte vraiment.",

        benefitsLabel:
            "CE QUE CELA CRÉE",

        benefitsTitle:
            "Plus de ce qui compte.",

        benefitOneTitle:
            "Moins de travail",

        benefitOneText:
            "Moins de tâches manuelles et répétitives.",

        benefitTwoTitle:
            "Moins de coûts",

        benefitTwoText:
            "Des processus plus efficaces créent de nouvelles possibilités.",

        benefitThreeTitle:
            "Plus de temps",

        benefitThreeText:
            "Plus de temps pour les clients, la stratégie et la croissance.",

        benefitFourTitle:
            "Plus de croissance",

        benefitFourText:
            "La technologie crée de l'espace pour la prochaine étape.",

        contactLabel:
            "PRÊT POUR LA PROCHAINE ÉTAPE ?",

        contactTitle:
            "Faisons avancer les choses.",

        contactText:
            "Vous avez un processus qui prend trop de temps ? Parlez-nous-en.",

        formName:
            "Nom",

        formCompany:
            "Entreprise",

        formEmail:
            "E-mail",

        formMessage:
            "Comment pouvons-nous vous aider ?",

        formButton:
            "Envoyer la demande",

        privacyLabel:
            "CONFIDENTIALITÉ",

        privacyTitle:
            "Politique de confidentialité",

        privacyText:
            "Cette politique de confidentialité est actuellement un texte provisoire. Avant le lancement public de KERVAQ, elle devra être adaptée à la mise en œuvre technique réelle, aux services utilisés, au siège de l'entreprise et aux traitements de données concernés.",

        imprintLabel:
            "MENTIONS LÉGALES",

        imprintTitle:
            "Mentions légales",

        imprintText:
            "Les mentions légales seront complétées dès que les informations de l'entreprise KERVAQ seront établies. Cela comprend notamment le nom de l'entreprise, l'adresse, le représentant légal et les autres informations obligatoires.",

        privacyLink:
            "Confidentialité",

        imprintLink:
            "Mentions légales",

        footerText:
            "La technologie pour la prochaine étape.",

        footerRights:
            "Tous droits réservés."

    }

};



/* =====================================================
   LANGUAGE SWITCHER
===================================================== */

const languageButton =
    document.getElementById("languageButton");

const languageSelector =
    document.querySelector(".language-selector");

const languageMenu =
    document.getElementById("languageMenu");

const currentFlag =
    document.getElementById("currentFlag");


const flags = {

    de: "🇩🇪",
    en: "🇬🇧",
    fr: "🇫🇷"

};


function setLanguage(language) {

    const texts =
        translations[language];

    if (!texts) {
        return;
    }


    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(function(element) {

            const key =
                element.getAttribute("data-i18n");

            if (texts[key]) {

                element.textContent =
                    texts[key];

            }

        });


    currentFlag.textContent =
        flags[language];


    localStorage.setItem(
        "kervaq-language",
        language
    );


    languageSelector.classList.remove(
        "open"
    );

}


languageButton.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        languageSelector.classList.toggle(
            "open"
        );

    }
);


languageMenu
    .querySelectorAll("button")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const language =
                    button.getAttribute(
                        "data-language"
                    );

                setLanguage(language);

            }
        );

    });


document.addEventListener(
    "click",
    function() {

        languageSelector.classList.remove(
            "open"
        );

    }
);


const savedLanguage =
    localStorage.getItem(
        "kervaq-language"
    );


if (
    savedLanguage &&
    translations[savedLanguage]
) {

    setLanguage(savedLanguage);

}



/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 30) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


mobileMenuButton.addEventListener(
    "click",
    function() {

        mobileMenu.classList.toggle(
            "open"
        );

    }
);


mobileMenu
    .querySelectorAll("a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    });



/* =====================================================
   CARD "MEHR ERFAHREN"
===================================================== */

const cards =
    document.querySelectorAll(
        ".feature-card"
    );


cards.forEach(function(card) {

    const button =
        card.querySelector(
            ".learn-more"
        );


    button.addEventListener(
        "click",
        function() {


            cards.forEach(
                function(otherCard) {

                    if (
                        otherCard !== card
                    ) {

                        otherCard.classList.remove(
                            "active"
                        );

                    }

                }
            );


            card.classList.toggle(
                "active"
            );

        }
    );

});



/* =====================================================
   CARD 3D MOUSE EFFECT
===================================================== */

cards.forEach(function(card) {


    card.addEventListener(
        "mousemove",
        function(event) {


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateX =
                (y / rect.height - 0.5) *
                -5;


            const rotateY =
                (x / rect.width - 0.5) *
                5;


            card.style.transform =
                "perspective(800px) " +
                "rotateX(" +
                rotateX +
                "deg) " +
                "rotateY(" +
                rotateY +
                "deg) " +
                "translateY(-5px)";


            card.style.setProperty(
                "--mouse-x",
                x + "px"
            );


            card.style.setProperty(
                "--mouse-y",
                y + "px"
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "perspective(800px) " +
                "rotateX(0deg) " +
                "rotateY(0deg) " +
                "translateY(0)";

        }
    );

});



/* =====================================================
   HERO CORE MOUSE EFFECT
===================================================== */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );

const orb =
    document.querySelector(
        ".orb"
    );


if (
    heroVisual &&
    orb
) {


    heroVisual.addEventListener(
        "mousemove",
        function(event) {


            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const moveX =
                (x / rect.width - 0.5) *
                12;


            const moveY =
                (y / rect.height - 0.5) *
                12;


            orb.style.transform =
                "translate(" +
                "calc(-50% + " +
                moveX +
                "px), " +
                "calc(-50% + " +
                moveY +
                "px))";

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        function() {

            orb.style.transform =
                "translate(-50%,-50%)";

        }
    );

}



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const language =
            document.documentElement.lang;


        const messages = {

            de:
                "Vielen Dank. Das Formular ist vorbereitet – sobald die KERVAQ-E-Mail-Adresse hinterlegt ist, kann die Anfrage direkt versendet werden.",

            en:
                "Thank you. The form is ready — once the KERVAQ email address is connected, requests can be sent directly.",

            fr:
                "Merci. Le formulaire est prêt — dès que l'adresse e-mail de KERVAQ sera connectée, les demandes pourront être envoyées directement."

        };


        formMessage.textContent =
            messages[language];


        contactForm.reset();

    }
);



/* =====================================================
   LEGAL MODALS
===================================================== */

const openModalButtons =
    document.querySelectorAll(
        "[data-open-modal]"
    );


const closeModalButtons =
    document.querySelectorAll(
        "[data-close-modal]"
    );


openModalButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const modalId =
                    button.getAttribute(
                        "data-open-modal"
                    );


                const modal =
                    document.getElementById(
                        modalId
                    );


                modal.classList.add(
                    "open"
                );

            }
        );

    }
);


closeModalButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                button
                    .closest(".legal-modal")
                    .classList.remove(
                        "open"
                    );

            }
        );

    }
);


document
    .querySelectorAll(".legal-modal")
    .forEach(function(modal) {

        modal.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "open"
                    );

                }

            }
        );

    });


document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            document
                .querySelectorAll(".legal-modal.open")
                .forEach(function(modal) {

                    modal.classList.remove(
                        "open"
                    );

                });

        }

    }
);



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function(event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });
