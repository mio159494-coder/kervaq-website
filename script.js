/* =========================================================
   KERVAQ — GLOBAL SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        de: {

            /* NAVIGATION */
            solutions: "Lösungen",
            about: "Über uns",
            contact: "Kontakt",
            login: "Login",
            start: "Starten",

            /* HERO */
            heroBadge: "Software für die Zukunft",
            heroTitle: "Bringen Sie Ihr Unternehmen voran.",
            heroText:
                "Wir entwickeln intelligente Softwarelösungen, die Prozesse vereinfachen, Arbeit reduzieren und Unternehmen effizienter machen.",
            heroPrimary: "Lösungen entdecken",
            heroSecondary: "Kontakt aufnehmen",

            /* SOLUTIONS */
            solutionsEyebrow: "Unsere Lösungen",
            solutionsTitle: "Weniger Aufwand.<br>Mehr Fortschritt.",
            solutionsText:
                "KERVAQ verbindet Automatisierung, intelligente Software und effiziente Prozesse zu Lösungen, die Unternehmen im Alltag wirklich entlasten.",

            automationTitle: "Automatisierung",
            automationText:
                "Wiederkehrende Aufgaben automatisieren und wertvolle Arbeitszeit zurückgewinnen.",
            automationDetails:
                "Automatisieren Sie wiederkehrende Abläufe, reduzieren Sie manuelle Arbeit und schaffen Sie mehr Zeit für Aufgaben, die wirklich wichtig sind.",

            intelligenceTitle: "Intelligente Software",
            intelligenceText:
                "Moderne Software, die Informationen verbindet und Prozesse intelligenter macht.",
            intelligenceDetails:
                "KERVAQ verbindet Informationen und Prozesse, damit Entscheidungen schneller getroffen und Arbeitsabläufe übersichtlicher gestaltet werden können.",

            efficiencyTitle: "Effizienz",
            efficiencyText:
                "Klarere Abläufe, weniger Fehler und mehr Zeit für die wirklich wichtigen Aufgaben.",
            efficiencyDetails:
                "Durch optimierte Prozesse können unnötige Arbeitsschritte reduziert, Fehlerquellen verringert und Ressourcen gezielter eingesetzt werden.",

            more: "Mehr erfahren",

            /* ABOUT */
            aboutEyebrow: "KERVAQ",
            aboutTitle: "Technologie soll Arbeit abnehmen.",
            aboutText:
                "Wir entwickeln Software mit einem klaren Ziel: Unternehmen sollen schneller, einfacher und effizienter arbeiten können.",
            aboutText2:
                "Routineaufgaben werden reduziert, Prozesse verbessert und wertvolle Zeit zurückgewonnen.",
            aboutLink: "Mehr über KERVAQ",

            /* FEATURES */
            whyEyebrow: "Warum KERVAQ",
            whyTitle: "Mehr Zeit für das,<br>was wirklich zählt.",

            feature1Title: "Weniger Arbeit",
            feature1Text:
                "Wiederkehrende und zeitaufwendige Aufgaben können automatisiert werden.",

            feature2Title: "Weniger Kosten",
            feature2Text:
                "Effizientere Prozesse können unnötigen Aufwand und vermeidbare Kosten reduzieren.",

            feature3Title: "Mehr Zeit",
            feature3Text:
                "Gute Software gibt Menschen Zeit zurück, die für wichtigere Aufgaben genutzt werden kann.",

            /* CTA */
            ctaEyebrow: "KERVAQ",
            ctaTitle: "Bereit für den nächsten Schritt?",
            ctaText:
                "Lassen Sie uns herausfinden, wie Software Ihr Unternehmen voranbringen kann.",
            ctaButton: "Gespräch starten",

            /* AI */
            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Frage über KERVAQ...",
            aiWelcome:
                "Hallo! Ich bin die KERVAQ AI. Wie kann ich dir etwas über KERVAQ erklären?",

            /* FOOTER */
            footerSolutions: "Lösungen",
            footerAbout: "Über uns",
            footerContact: "Kontakt",
            footerPrivacy: "Datenschutz",
            footerImprint: "Impressum",

            /* LOGIN */
            loginTitle: "Willkommen zurück.",
            loginText:
                "Melden Sie sich an, um auf Ihr KERVAQ Dashboard zuzugreifen.",
            loginEmail: "E-Mail",
            loginPassword: "Passwort",
            loginButton: "Einloggen",
            loginNote:
                "Demo-Version — noch keine echte Benutzerverwaltung.",
            loginError:
                "Bitte geben Sie E-Mail und Passwort ein.",

            /* DASHBOARD */
            dashboardTitle: "Dashboard",
            dashboardWelcome: "Willkommen zurück.",
            dashboardWelcomeText:
                "Hier sehen Sie einen Überblick über Ihre KERVAQ Umgebung.",
            statProjects: "Projekte",
            statAutomation: "Automatisierungen",
            statTime: "Zeit gespart",
            statEfficiency: "Effizienz",
            activityTitle: "Letzte Aktivitäten",
            activityToday: "Heute",
            dashboardAI: "KERVAQ AI",
            dashboardAIText:
                "Ihr intelligenter Assistent für Prozesse, Daten und Automatisierung.",
            comingSoon: "Demnächst verfügbar",
            logout: "Abmelden",

            /* PAGE HERO */
            solutionsPageTitle: "Software, die Arbeit abnimmt.",
            solutionsPageText:
                "KERVAQ entwickelt digitale Lösungen für automatisierte, effiziente und moderne Unternehmen.",

            aboutPageTitle: "Wir entwickeln Technologie mit einem Ziel.",
            aboutPageText:
                "Weniger Aufwand. Mehr Zeit. Mehr Möglichkeiten.",

            contactPageTitle: "Lassen Sie uns sprechen.",
            contactPageText:
                "Erzählen Sie uns, wo Ihr Unternehmen heute steht und wo Sie hin möchten.",

            /* CONTACT */
            contactEmail: "E-Mail",
            contactMessage: "Nachricht",
            contactName: "Name",
            contactCompany: "Unternehmen",
            contactSend: "Nachricht senden",

            /* LEGAL */
            privacyTitle: "Datenschutz",
            imprintTitle: "Impressum"
        },


        en: {

            /* NAVIGATION */
            solutions: "Solutions",
            about: "About us",
            contact: "Contact",
            login: "Login",
            start: "Get started",

            /* HERO */
            heroBadge: "Software for the future",
            heroTitle: "Move your business forward.",
            heroText:
                "We develop intelligent software solutions that simplify processes, reduce workload and make businesses more efficient.",
            heroPrimary: "Explore solutions",
            heroSecondary: "Contact us",

            /* SOLUTIONS */
            solutionsEyebrow: "Our solutions",
            solutionsTitle: "Less effort.<br>More progress.",
            solutionsText:
                "KERVAQ combines automation, intelligent software and efficient processes to create solutions that genuinely relieve businesses in their daily work.",

            automationTitle: "Automation",
            automationText:
                "Automate repetitive tasks and regain valuable working time.",
            automationDetails:
                "Automate repetitive workflows, reduce manual work and create more time for the tasks that actually matter.",

            intelligenceTitle: "Intelligent software",
            intelligenceText:
                "Modern software that connects information and makes processes smarter.",
            intelligenceDetails:
                "KERVAQ connects information and processes so decisions can be made faster and workflows can become clearer.",

            efficiencyTitle: "Efficiency",
            efficiencyText:
                "Clearer workflows, fewer errors and more time for important tasks.",
            efficiencyDetails:
                "Optimized processes can reduce unnecessary steps, minimize sources of error and help resources be used more effectively.",

            more: "Learn more",

            /* ABOUT */
            aboutEyebrow: "KERVAQ",
            aboutTitle: "Technology should take work away.",
            aboutText:
                "We develop software with one clear goal: helping businesses work faster, easier and more efficiently.",
            aboutText2:
                "Routine tasks are reduced, processes improved and valuable time given back.",
            aboutLink: "More about KERVAQ",

            /* FEATURES */
            whyEyebrow: "Why KERVAQ",
            whyTitle: "More time for what<br>really matters.",

            feature1Title: "Less work",
            feature1Text:
                "Repetitive and time-consuming tasks can be automated.",

            feature2Title: "Lower costs",
            feature2Text:
                "More efficient processes can reduce unnecessary work and avoidable costs.",

            feature3Title: "More time",
            feature3Text:
                "Good software gives people time back for more important tasks.",

            /* CTA */
            ctaEyebrow: "KERVAQ",
            ctaTitle: "Ready for the next step?",
            ctaText:
                "Let us explore how software can move your business forward.",
            ctaButton: "Start a conversation",

            /* AI */
            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Ask about KERVAQ...",
            aiWelcome:
                "Hello! I am KERVAQ AI. How can I explain something about KERVAQ?",

            /* FOOTER */
            footerSolutions: "Solutions",
            footerAbout: "About us",
            footerContact: "Contact",
            footerPrivacy: "Privacy",
            footerImprint: "Legal notice",

            /* LOGIN */
            loginTitle: "Welcome back.",
            loginText:
                "Sign in to access your KERVAQ dashboard.",
            loginEmail: "Email",
            loginPassword: "Password",
            loginButton: "Sign in",
            loginNote:
                "Demo version — no real user management yet.",
            loginError:
                "Please enter an email and password.",

            /* DASHBOARD */
            dashboardTitle: "Dashboard",
            dashboardWelcome: "Welcome back.",
            dashboardWelcomeText:
                "Here is an overview of your KERVAQ environment.",
            statProjects: "Projects",
            statAutomation: "Automations",
            statTime: "Time saved",
            statEfficiency: "Efficiency",
            activityTitle: "Recent activity",
            activityToday: "Today",
            dashboardAI: "KERVAQ AI",
            dashboardAIText:
                "Your intelligent assistant for processes, data and automation.",
            comingSoon: "Coming soon",
            logout: "Log out",

            /* PAGE HERO */
            solutionsPageTitle: "Software that takes work away.",
            solutionsPageText:
                "KERVAQ develops digital solutions for automated, efficient and modern businesses.",

            aboutPageTitle: "We build technology with one goal.",
            aboutPageText:
                "Less effort. More time. More possibilities.",

            contactPageTitle: "Let's talk.",
            contactPageText:
                "Tell us where your business is today and where you want to go.",

            /* CONTACT */
            contactEmail: "Email",
            contactMessage: "Message",
            contactName: "Name",
            contactCompany: "Company",
            contactSend: "Send message",

            /* LEGAL */
            privacyTitle: "Privacy",
            imprintTitle: "Legal notice"
        },


        fr: {

            /* NAVIGATION */
            solutions: "Solutions",
            about: "À propos",
            contact: "Contact",
            login: "Connexion",
            start: "Commencer",

            /* HERO */
            heroBadge: "Logiciels pour l'avenir",
            heroTitle: "Faites avancer votre entreprise.",
            heroText:
                "Nous développons des solutions logicielles intelligentes qui simplifient les processus, réduisent le travail et rendent les entreprises plus efficaces.",
            heroPrimary: "Découvrir les solutions",
            heroSecondary: "Nous contacter",

            /* SOLUTIONS */
            solutionsEyebrow: "Nos solutions",
            solutionsTitle: "Moins d'efforts.<br>Plus de progrès.",
            solutionsText:
                "KERVAQ combine automatisation, logiciels intelligents et processus efficaces pour créer des solutions qui simplifient réellement le travail quotidien des entreprises.",

            automationTitle: "Automatisation",
            automationText:
                "Automatisez les tâches répétitives et récupérez un temps de travail précieux.",
            automationDetails:
                "Automatisez les processus répétitifs, réduisez le travail manuel et libérez du temps pour les tâches qui comptent vraiment.",

            intelligenceTitle: "Logiciels intelligents",
            intelligenceText:
                "Des logiciels modernes qui connectent les informations et rendent les processus plus intelligents.",
            intelligenceDetails:
                "KERVAQ connecte les informations et les processus afin de faciliter les décisions et de rendre les flux de travail plus clairs.",

            efficiencyTitle: "Efficacité",
            efficiencyText:
                "Des processus plus clairs, moins d'erreurs et plus de temps pour les tâches importantes.",
            efficiencyDetails:
                "Des processus optimisés permettent de réduire les étapes inutiles, de limiter les erreurs et d'utiliser les ressources plus efficacement.",

            more: "En savoir plus",

            /* ABOUT */
            aboutEyebrow: "KERVAQ",
            aboutTitle: "La technologie doit réduire le travail.",
            aboutText:
                "Nous développons des logiciels avec un objectif clair : permettre aux entreprises de travailler plus rapidement, plus simplement et plus efficacement.",
            aboutText2:
                "Les tâches répétitives sont réduites, les processus améliorés et du temps précieux est libéré.",
            aboutLink: "En savoir plus sur KERVAQ",

            /* FEATURES */
            whyEyebrow: "Pourquoi KERVAQ",
            whyTitle: "Plus de temps pour ce<br>qui compte vraiment.",

            feature1Title: "Moins de travail",
            feature1Text:
                "Les tâches répétitives et chronophages peuvent être automatisées.",

            feature2Title: "Moins de coûts",
            feature2Text:
                "Des processus plus efficaces peuvent réduire le travail inutile et les coûts évitables.",

            feature3Title: "Plus de temps",
            feature3Text:
                "Un bon logiciel permet de récupérer du temps pour les tâches importantes.",

            /* CTA */
            ctaEyebrow: "KERVAQ",
            ctaTitle: "Prêt pour la prochaine étape ?",
            ctaText:
                "Découvrons ensemble comment les logiciels peuvent faire avancer votre entreprise.",
            ctaButton: "Démarrer une conversation",

            /* AI */
            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Posez une question sur KERVAQ...",
            aiWelcome:
                "Bonjour ! Je suis KERVAQ AI. Comment puis-je vous expliquer KERVAQ ?",

            /* FOOTER */
            footerSolutions: "Solutions",
            footerAbout: "À propos",
            footerContact: "Contact",
            footerPrivacy: "Confidentialité",
            footerImprint: "Mentions légales",

            /* LOGIN */
            loginTitle: "Bon retour.",
            loginText:
                "Connectez-vous pour accéder à votre tableau de bord KERVAQ.",
            loginEmail: "E-mail",
            loginPassword: "Mot de passe",
            loginButton: "Se connecter",
            loginNote:
                "Version démo — aucune gestion réelle des utilisateurs.",
            loginError:
                "Veuillez saisir un e-mail et un mot de passe.",

            /* DASHBOARD */
            dashboardTitle: "Tableau de bord",
            dashboardWelcome: "Bon retour.",
            dashboardWelcomeText:
                "Voici un aperçu de votre environnement KERVAQ.",
            statProjects: "Projets",
            statAutomation: "Automatisations",
            statTime: "Temps gagné",
            statEfficiency: "Efficacité",
            activityTitle: "Activité récente",
            activityToday: "Aujourd'hui",
            dashboardAI: "KERVAQ AI",
            dashboardAIText:
                "Votre assistant intelligent pour les processus, les données et l'automatisation.",
            comingSoon: "Bientôt disponible",
            logout: "Déconnexion",

            /* PAGE HERO */
            solutionsPageTitle: "Des logiciels qui réduisent le travail.",
            solutionsPageText:
                "KERVAQ développe des solutions numériques pour des entreprises automatisées, efficaces et modernes.",

            aboutPageTitle: "Nous créons une technologie avec un objectif.",
            aboutPageText:
                "Moins d'efforts. Plus de temps. Plus de possibilités.",

            contactPageTitle: "Parlons-en.",
            contactPageText:
                "Expliquez-nous où se trouve votre entreprise aujourd'hui et où vous souhaitez aller.",

            /* CONTACT */
            contactEmail: "E-mail",
            contactMessage: "Message",
            contactName: "Nom",
            contactCompany: "Entreprise",
            contactSend: "Envoyer le message",

            /* LEGAL */
            privacyTitle: "Confidentialité",
            imprintTitle: "Mentions légales"
        }

    };


    /* =====================================================
       LANGUAGE
    ===================================================== */

    const defaultLanguage = "de";

    let currentLanguage =
        localStorage.getItem("kervaq-language") ||
        defaultLanguage;

    if (!translations[currentLanguage]) {
        currentLanguage = defaultLanguage;
    }


    function applyLanguage(language) {

        if (!translations[language]) {
            return;
        }

        currentLanguage = language;

        localStorage.setItem(
            "kervaq-language",
            language
        );

        document.documentElement.lang =
            language;


        /* normal text */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;

                if (
                    translations[language][key] !==
                    undefined
                ) {

                    element.innerHTML =
                        translations[language][key];
                }
            });


        /* placeholders */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                if (
                    translations[language][key] !==
                    undefined
                ) {

                    element.placeholder =
                        translations[language][key];
                }
            });


        /* language buttons */

        document
            .querySelectorAll(".lang-btn")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang === language
                );
            });


        /* update expandable card text */

        updateOpenCardTexts();


        /* AI welcome */

        const welcome =
            document.querySelector(".ai-welcome");

        if (welcome) {

            welcome.textContent =
                translations[language].aiWelcome;
        }
    }


    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.lang;

                    applyLanguage(language);
                }
            );
        });


    /* =====================================================
       EXPANDABLE SOLUTION CARDS
    ===================================================== */

    const cardButtons =
        document.querySelectorAll(
            ".card .learn-more"
        );


    function updateOpenCardTexts() {

        cardButtons.forEach(button => {

            const card =
                button.closest(".card");

            if (!card) {
                return;
            }

            const textElement =
                button.querySelector(
                    "[data-i18n]"
                );

            if (!textElement) {
                return;
            }

            const key =
                card.classList.contains("open")
                    ? "moreClose"
                    : "more";

            if (
                translations[currentLanguage][key]
            ) {

                textElement.textContent =
                    translations[currentLanguage][key];
            }

        });
    }


    cardButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const card =
                    button.closest(".card");

                if (!card) {
                    return;
                }

                const details =
                    card.querySelector(
                        ".card-details"
                    );

                if (!details) {
                    return;
                }


                const key =
                    button.dataset.openText;


                if (
                    !details.textContent.trim()
                ) {

                    if (
                        translations[currentLanguage][key]
                    ) {

                        details.textContent =
                            translations[currentLanguage][key];
                    }
                }


                const isOpen =
                    card.classList.contains("open");


                /* close all other cards */

                document
                    .querySelectorAll(".card.open")
                    .forEach(otherCard => {

                        if (otherCard !== card) {

                            otherCard.classList.remove(
                                "open"
                            );
                        }
                    });


                card.classList.toggle(
                    "open",
                    !isOpen
                );


                updateOpenCardTexts();
            }
        );

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navRight =
        document.querySelector(".nav-right");


    if (mobileMenu && navRight) {

        mobileMenu.addEventListener(
            "click",
            () => {

                navRight.classList.toggle(
                    "mobile-open"
                );

            }
        );

    }


    /* =====================================================
       AI CHAT
    ===================================================== */

    const aiOpen =
        document.querySelector(".ai-open");

    const aiChat =
        document.querySelector(".ai-chat");

    const aiClose =
        document.querySelector(".ai-close");

    const aiForm =
        document.querySelector(".ai-form");

    const aiInput =
        document.querySelector(
            ".ai-form input"
        );

    const aiMessages =
        document.querySelector(
            ".ai-messages"
        );


    if (aiOpen && aiChat) {

        aiOpen.addEventListener(
            "click",
            () => {

                aiChat.classList.add(
                    "open"
                );

                aiOpen.classList.add(
                    "hidden"
                );

                if (aiInput) {
                    setTimeout(
                        () => aiInput.focus(),
                        100
                    );
                }

            }
        );

    }


    if (aiClose && aiChat && aiOpen) {

        aiClose.addEventListener(
            "click",
            () => {

                aiChat.classList.remove(
                    "open"
                );

                aiOpen.classList.remove(
                    "hidden"
                );

            }
        );

    }


    if (
        aiForm &&
        aiInput &&
        aiMessages
    ) {

        aiForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const text =
                    aiInput.value.trim();


                if (!text) {
                    return;
                }


                /* user message */

                const userMessage =
                    document.createElement(
                        "div"
                    );

                userMessage.className =
                    "ai-message user";

                userMessage.textContent =
                    text;

                aiMessages.appendChild(
                    userMessage
                );


                aiInput.value = "";


                /* demo response */

                setTimeout(
                    () => {

                        const botMessage =
                            document.createElement(
                                "div"
                            );

                        botMessage.className =
                            "ai-message bot";


                        let response;


                        const lower =
                            text.toLowerCase();


                        if (
                            lower.includes("was ist") ||
                            lower.includes("what is") ||
                            lower.includes("qu'est")
                        ) {

                            response =
                                currentLanguage === "en"
                                    ? "KERVAQ develops software solutions designed to automate processes, reduce workload and help businesses move forward."
                                    : currentLanguage === "fr"
                                        ? "KERVAQ développe des solutions logicielles destinées à automatiser les processus, réduire le travail et faire avancer les entreprises."
                                        : "KERVAQ entwickelt Softwarelösungen, die Prozesse automatisieren, Arbeit reduzieren und Unternehmen voranbringen.";

                        } else {

                            response =
                                currentLanguage === "en"
                                    ? "KERVAQ focuses on automation, intelligent software and efficiency. The public AI is currently a demo and can answer general questions about KERVAQ."
                                    : currentLanguage === "fr"
                                        ? "KERVAQ se concentre sur l'automatisation, les logiciels intelligents et l'efficacité. L'IA publique est actuellement une démo et peut répondre aux questions générales sur KERVAQ."
                                        : "KERVAQ konzentriert sich auf Automatisierung, intelligente Software und Effizienz. Die öffentliche AI ist aktuell eine Demo und kann allgemeine Fragen über KERVAQ beantworten.";

                        }


                        botMessage.textContent =
                            response;

                        aiMessages.appendChild(
                            botMessage
                        );


                        aiMessages.scrollTop =
                            aiMessages.scrollHeight;

                    },
                    650
                );


                aiMessages.scrollTop =
                    aiMessages.scrollHeight;

            }
        );

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const button =
                    contactForm.querySelector(
                        "button[type='submit']"
                    );


                if (!button) {
                    return;
                }


                const originalText =
                    button.textContent;


                button.textContent =
                    currentLanguage === "en"
                        ? "Message sent ✓"
                        : currentLanguage === "fr"
                            ? "Message envoyé ✓"
                            : "Nachricht gesendet ✓";


                button.disabled = true;


                setTimeout(
                    () => {

                        button.textContent =
                            originalText;

                        button.disabled =
                            false;

                        contactForm.reset();

                    },
                    2500
                );

            }
        );

    }


    /* =====================================================
       LOGIN
    ===================================================== */

    const loginForm =
        document.querySelector(
            ".login-form"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const email =
                    loginForm.querySelector(
                        "input[type='email']"
                    );

                const password =
                    loginForm.querySelector(
                        "input[type='password']"
                    );

                const error =
                    document.querySelector(
                        ".login-error"
                    );


                if (
                    !email ||
                    !password
                ) {
                    return;
                }


                if (
                    !email.value.trim() ||
                    !password.value.trim()
                ) {

                    if (error) {

                        error.textContent =
                            translations[
                                currentLanguage
                            ].loginError;

                        error.style.display =
                            "block";
                    }

                    return;
                }


                if (error) {

                    error.style.display =
                        "none";
                }


                sessionStorage.setItem(
                    "kervaq-demo-user",
                    email.value.trim()
                );


                window.location.href =
                    "dashboard.html";

            }
        );

    }


    /* =====================================================
       DASHBOARD PROTECTION
    ===================================================== */

    const dashboard =
        document.querySelector(
            ".dashboard"
        );


    if (dashboard) {

        const user =
            sessionStorage.getItem(
                "kervaq-demo-user"
            );


        if (!user) {

            window.location.href =
                "login.html";

            return;
        }


        const userEmail =
            document.querySelector(
                ".user-email"
            );


        if (userEmail) {

            userEmail.textContent =
                user;
        }


        const userAvatar =
            document.querySelector(
                ".user-avatar"
            );


        if (
            userAvatar &&
            user.length > 0
        ) {

            userAvatar.textContent =
                user
                    .charAt(0)
                    .toUpperCase();
        }

    }


    /* =====================================================
       LOGOUT
    ===================================================== */

    const logoutButton =
        document.querySelector(
            ".logout-btn"
        );


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            () => {

                sessionStorage.removeItem(
                    "kervaq-demo-user"
                );

                window.location.href =
                    "login.html";

            }
        );

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (
                href === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            } else {

                link.classList.remove(
                    "active"
                );
            }

        });


    /* =====================================================
       INITIAL LANGUAGE
    ===================================================== */

    applyLanguage(
        currentLanguage
    );

});
