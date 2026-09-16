document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileButton = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileButton && navLinks) {

        mobileButton.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("mobile-open");

            if (isOpen) {

                navLinks.style.display = "flex";
                navLinks.style.position = "absolute";
                navLinks.style.top = "72px";
                navLinks.style.left = "14px";
                navLinks.style.right = "14px";
                navLinks.style.padding = "20px";
                navLinks.style.flexDirection = "column";
                navLinks.style.background = "#080b10";
                navLinks.style.border = "1px solid rgba(255,255,255,0.08)";
                navLinks.style.borderRadius = "14px";
                navLinks.style.zIndex = "1500";

            } else {

                navLinks.removeAttribute("style");

            }

        });

    }


    /* =====================================================
       TRANSLATIONS
    ===================================================== */

    const translations = {

        de: {

            navSolutions: "Lösungen",
            navAbout: "Über uns",
            navContact: "Kontakt",
            navLogin: "Login",
            navStart: "Starten",

            heroBadge: "Software für Unternehmen",
            heroTitle: "Bringen Sie Ihr Unternehmen voran.",
            heroText:
                "KERVAQ entwickelt intelligente Software, die Unternehmen Arbeit abnimmt, Prozesse vereinfacht und neue Zeit für Wachstum schafft.",
            heroPrimary: "Lösungen entdecken",
            heroSecondary: "Kontakt aufnehmen",

            technology: "KERVAQ TECHNOLOGY CORE",

            solutionsEyebrow: "Unsere Lösungen",
            solutionsTitle: "Weniger Arbeit. Mehr Wirkung.",
            solutionsText:
                "Wir verbinden Automatisierung, intelligente Software und effiziente Prozesse zu Lösungen, die Unternehmen spürbar entlasten.",

            automationTitle: "Automatisierung",
            automationText:
                "Wiederkehrende Aufgaben werden automatisiert, damit Ihr Team sich auf wichtigere Dinge konzentrieren kann.",
            automationDetails:
                "KERVAQ analysiert Prozesse und entwickelt digitale Abläufe, die manuelle Arbeit reduzieren und Zeit sparen.",

            intelligenceTitle: "Intelligenz",
            intelligenceText:
                "Daten und Prozesse werden intelligent miteinander verbunden, um bessere Entscheidungen zu ermöglichen.",
            intelligenceDetails:
                "Unsere Systeme können Informationen strukturieren, Zusammenhänge erkennen und Prozesse intelligenter machen.",

            efficiencyTitle: "Effizienz",
            efficiencyText:
                "Weniger Aufwand, weniger Kosten und mehr Zeit für die Dinge, die Ihr Unternehmen wirklich voranbringen.",
            efficiencyDetails:
                "Das Ziel ist ein effizienteres Unternehmen mit klareren Abläufen, weniger Reibungsverlusten und mehr Kapazität.",

            more: "Mehr erfahren",
            less: "Weniger anzeigen",

            aboutEyebrow: "KERVAQ",
            aboutTitle: "Software, die Arbeit abnimmt.",
            aboutText:
                "Wir glauben, dass Technologie nicht komplizierter werden sollte als das Problem, das sie löst. KERVAQ entwickelt Software mit einem klaren Ziel: Unternehmen schneller, einfacher und effizienter zu machen.",

            ctaTitle: "Bereit für den nächsten Schritt?",
            ctaText:
                "Lassen Sie uns herausfinden, welche Prozesse in Ihrem Unternehmen automatisiert und verbessert werden können.",
            ctaButton: "Kontakt aufnehmen",

            footerSlogan: "Move Business Forward.",
            privacy: "Datenschutz",
            imprint: "Impressum",

            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Frage zu KERVAQ...",
            aiWelcome:
                "Hallo! Ich bin die KERVAQ AI. Ich kann dir Fragen zu KERVAQ, unseren Lösungen und unserem Ansatz beantworten.",
            aiDemo:
                "Die öffentliche KERVAQ AI ist momentan als Demo eingebaut. Die echte KI-Anbindung folgt.",

            pageSolutionsTitle:
                "Technologie, die Unternehmen voranbringt.",
            pageSolutionsText:
                "KERVAQ entwickelt digitale Lösungen, die repetitive Arbeit reduzieren, Prozesse vereinfachen und Unternehmen effizienter machen.",

            pageAboutTitle:
                "Wir bauen Software mit einem klaren Ziel.",
            pageAboutText:
                "KERVAQ steht für intelligente, moderne und praktische Softwarelösungen.",

            pageContactTitle:
                "Lassen Sie uns sprechen.",
            pageContactText:
                "Sie haben einen Prozess, der unnötig Zeit kostet? Erzählen Sie uns davon.",

            formName: "Name",
            formEmail: "E-Mail",
            formCompany: "Unternehmen",
            formMessage: "Nachricht",
            formSend: "Nachricht senden",

            loginTitle: "Willkommen zurück.",
            loginText:
                "Melden Sie sich bei Ihrem KERVAQ Bereich an.",
            loginEmail: "E-Mail-Adresse",
            loginPassword: "Passwort",
            loginButton: "Einloggen",
            loginNote:
                "Demo-Login: Die Authentifizierung ist momentan nur für die Frontend-Demo aktiv.",

            dashboardTitle: "Dashboard",
            dashboardWelcome: "Willkommen bei KERVAQ.",
            dashboardSubtitle:
                "Hier entsteht Ihre zentrale Übersicht.",
            statProcesses: "Automatisierte Prozesse",
            statTime: "Gesparte Stunden",
            statEfficiency: "Effizienz",
            statTasks: "Offene Aufgaben",
            recent: "Letzte Aktivitäten",
            aiDashboard: "KERVAQ AI",
            aiDashboardText:
                "Ihre intelligente Assistenz für Prozesse, Daten und Automatisierung.",
            comingSoon: "Coming next",
            logout: "Abmelden",

            legalNotice:
                "Hinweis: Diese rechtlichen Texte sind zunächst Platzhalter und müssen vor einer kommerziellen Veröffentlichung an Ihre tatsächlichen Unternehmensdaten angepasst und rechtlich geprüft werden."
        },


        en: {

            navSolutions: "Solutions",
            navAbout: "About us",
            navContact: "Contact",
            navLogin: "Login",
            navStart: "Get started",

            heroBadge: "Software for businesses",
            heroTitle: "Move your business forward.",
            heroText:
                "KERVAQ builds intelligent software that removes manual work, simplifies processes and creates more time for growth.",
            heroPrimary: "Explore solutions",
            heroSecondary: "Get in touch",

            technology: "KERVAQ TECHNOLOGY CORE",

            solutionsEyebrow: "Our solutions",
            solutionsTitle: "Less work. More impact.",
            solutionsText:
                "We combine automation, intelligent software and efficient processes to create solutions that make businesses more effective.",

            automationTitle: "Automation",
            automationText:
                "Recurring tasks are automated so your team can focus on what matters most.",
            automationDetails:
                "KERVAQ analyzes processes and develops digital workflows that reduce manual work and save time.",

            intelligenceTitle: "Intelligence",
            intelligenceText:
                "Data and processes are connected intelligently to support better decisions.",
            intelligenceDetails:
                "Our systems can structure information, identify connections and make processes more intelligent.",

            efficiencyTitle: "Efficiency",
            efficiencyText:
                "Less effort, lower costs and more time for the things that truly move your business forward.",
            efficiencyDetails:
                "The goal is a more efficient business with clearer processes and more capacity.",

            more: "Learn more",
            less: "Show less",

            aboutEyebrow: "KERVAQ",
            aboutTitle: "Software that takes work off your hands.",
            aboutText:
                "We believe technology should not become more complicated than the problem it solves. KERVAQ builds software with one clear goal: making businesses faster, simpler and more efficient.",

            ctaTitle: "Ready for the next step?",
            ctaText:
                "Let's find out which processes in your business can be automated and improved.",
            ctaButton: "Get in touch",

            footerSlogan: "Move Business Forward.",
            privacy: "Privacy",
            imprint: "Imprint",

            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Ask about KERVAQ...",
            aiWelcome:
                "Hello! I'm KERVAQ AI. I can answer questions about KERVAQ, our solutions and our approach.",
            aiDemo:
                "The public KERVAQ AI is currently a demo. The real AI connection will follow.",

            pageSolutionsTitle:
                "Technology that moves businesses forward.",
            pageSolutionsText:
                "KERVAQ builds digital solutions that reduce repetitive work, simplify processes and make businesses more efficient.",

            pageAboutTitle:
                "We build software with a clear purpose.",
            pageAboutText:
                "KERVAQ stands for intelligent, modern and practical software solutions.",

            pageContactTitle:
                "Let's talk.",
            pageContactText:
                "Have a process that takes too much time? Tell us about it.",

            formName: "Name",
            formEmail: "Email",
            formCompany: "Company",
            formMessage: "Message",
            formSend: "Send message",

            loginTitle: "Welcome back.",
            loginText:
                "Sign in to your KERVAQ area.",
            loginEmail: "Email address",
            loginPassword: "Password",
            loginButton: "Sign in",
            loginNote:
                "Demo login: Authentication is currently only active for the frontend demo.",

            dashboardTitle: "Dashboard",
            dashboardWelcome: "Welcome to KERVAQ.",
            dashboardSubtitle:
                "Your central overview is being built here.",
            statProcesses: "Automated processes",
            statTime: "Hours saved",
            statEfficiency: "Efficiency",
            statTasks: "Open tasks",
            recent: "Recent activity",
            aiDashboard: "KERVAQ AI",
            aiDashboardText:
                "Your intelligent assistant for processes, data and automation.",
            comingSoon: "Coming next",
            logout: "Log out",

            legalNotice:
                "Notice: These legal texts are currently placeholders and must be adapted to your actual company details and legally reviewed before commercial publication."
        },


        fr: {

            navSolutions: "Solutions",
            navAbout: "À propos",
            navContact: "Contact",
            navLogin: "Connexion",
            navStart: "Commencer",

            heroBadge: "Logiciels pour entreprises",
            heroTitle: "Faites avancer votre entreprise.",
            heroText:
                "KERVAQ développe des logiciels intelligents qui réduisent le travail manuel, simplifient les processus et créent plus de temps pour la croissance.",
            heroPrimary: "Découvrir les solutions",
            heroSecondary: "Nous contacter",

            technology: "KERVAQ TECHNOLOGY CORE",

            solutionsEyebrow: "Nos solutions",
            solutionsTitle: "Moins de travail. Plus d'impact.",
            solutionsText:
                "Nous combinons automatisation, logiciels intelligents et processus efficaces pour rendre les entreprises plus performantes.",

            automationTitle: "Automatisation",
            automationText:
                "Les tâches répétitives sont automatisées afin que vos équipes puissent se concentrer sur l'essentiel.",
            automationDetails:
                "KERVAQ analyse les processus et développe des flux numériques qui réduisent le travail manuel et font gagner du temps.",

            intelligenceTitle: "Intelligence",
            intelligenceText:
                "Les données et les processus sont connectés intelligemment afin de faciliter les décisions.",
            intelligenceDetails:
                "Nos systèmes peuvent structurer les informations, identifier les connexions et rendre les processus plus intelligents.",

            efficiencyTitle: "Efficacité",
            efficiencyText:
                "Moins d'efforts, moins de coûts et plus de temps pour ce qui fait réellement avancer votre entreprise.",
            efficiencyDetails:
                "L'objectif est une entreprise plus efficace avec des processus plus clairs et davantage de capacité.",

            more: "En savoir plus",
            less: "Afficher moins",

            aboutEyebrow: "KERVAQ",
            aboutTitle: "Des logiciels qui vous déchargent du travail.",
            aboutText:
                "Nous pensons que la technologie ne devrait pas être plus complexe que le problème qu'elle résout. KERVAQ crée des logiciels avec un objectif clair : rendre les entreprises plus rapides, simples et efficaces.",

            ctaTitle: "Prêt pour la prochaine étape ?",
            ctaText:
                "Découvrons quels processus de votre entreprise peuvent être automatisés et améliorés.",
            ctaButton: "Nous contacter",

            footerSlogan: "Move Business Forward.",
            privacy: "Confidentialité",
            imprint: "Mentions légales",

            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Question sur KERVAQ...",
            aiWelcome:
                "Bonjour ! Je suis KERVAQ AI. Je peux répondre aux questions sur KERVAQ, nos solutions et notre approche.",
            aiDemo:
                "La KERVAQ AI publique est actuellement une démo. La véritable connexion IA suivra.",

            pageSolutionsTitle:
                "Une technologie qui fait avancer les entreprises.",
            pageSolutionsText:
                "KERVAQ développe des solutions numériques qui réduisent le travail répétitif, simplifient les processus et rendent les entreprises plus efficaces.",

            pageAboutTitle:
                "Nous créons des logiciels avec un objectif clair.",
            pageAboutText:
                "KERVAQ représente des solutions logicielles intelligentes, modernes et pratiques.",

            pageContactTitle:
                "Parlons-en.",
            pageContactText:
                "Vous avez un processus qui prend trop de temps ? Parlez-nous-en.",

            formName: "Nom",
            formEmail: "E-mail",
            formCompany: "Entreprise",
            formMessage: "Message",
            formSend: "Envoyer",

            loginTitle: "Bon retour.",
            loginText:
                "Connectez-vous à votre espace KERVAQ.",
            loginEmail: "Adresse e-mail",
            loginPassword: "Mot de passe",
            loginButton: "Connexion",
            loginNote:
                "Connexion démo : l'authentification est actuellement active uniquement pour la démo frontend.",

            dashboardTitle: "Dashboard",
            dashboardWelcome: "Bienvenue chez KERVAQ.",
            dashboardSubtitle:
                "Votre aperçu central est en cours de création.",
            statProcesses: "Processus automatisés",
            statTime: "Heures économisées",
            statEfficiency: "Efficacité",
            statTasks: "Tâches ouvertes",
            recent: "Activité récente",
            aiDashboard: "KERVAQ AI",
            aiDashboardText:
                "Votre assistant intelligent pour les processus, les données et l'automatisation.",
            comingSoon: "Bientôt disponible",
            logout: "Déconnexion",

            legalNotice:
                "Remarque : Ces textes juridiques sont actuellement des modèles et doivent être adaptés aux informations réelles de votre entreprise et vérifiés juridiquement avant publication commerciale."
        }

    };


    /* =====================================================
       LANGUAGE
    ===================================================== */

    function applyLanguage(lang) {

        if (!translations[lang]) {
            lang = "de";
        }

        const dictionary = translations[lang];

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }

        });


        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key = element.dataset.i18nPlaceholder;

                if (dictionary[key]) {
                    element.placeholder = dictionary[key];
                }

            });


        document.querySelectorAll(".lang-btn").forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === lang
            );

        });


        updateAIWelcome(dictionary);
    }


    /* =====================================================
       AI ELEMENTS
    ===================================================== */

    const aiOpen = document.querySelector(".ai-open");
    const aiChat = document.querySelector(".ai-chat");
    const aiClose = document.querySelector(".ai-close");
    const aiForm = document.querySelector(".ai-form");
    const aiInput = document.querySelector(".ai-form input");
    const aiMessages = document.querySelector(".ai-messages");


    function updateAIWelcome(dictionary) {

        if (!aiMessages) return;

        const welcome = aiMessages.querySelector(".ai-welcome");

        if (welcome && dictionary.aiWelcome) {
            welcome.textContent = dictionary.aiWelcome;
        }

    }


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    document.querySelectorAll(".lang-btn").forEach(button => {

        button.addEventListener("click", () => {

            applyLanguage(button.dataset.lang);

        });

    });


    const savedLanguage =
        localStorage.getItem("kervaq-language") || "de";

    applyLanguage(savedLanguage);


    /* =====================================================
       SOLUTION CARDS
    ===================================================== */

    document.querySelectorAll(".learn-more").forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".card");

            if (!card) return;

            const details = card.querySelector(".card-details");

            if (!details) return;

            const key = button.dataset.openText;

            const lang =
                localStorage.getItem("kervaq-language") || "de";

            const dictionary = translations[lang];

            const isOpen = card.classList.toggle("open");

            if (isOpen) {

                details.textContent =
                    dictionary[key] || "";

                const
