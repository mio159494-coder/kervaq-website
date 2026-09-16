document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       TRANSLATIONS
    ========================================= */

    const translations = {

        de: {

            /* Navigation */
            solutions: "Lösungen",
            about: "Über uns",
            contact: "Kontakt",
            login: "Login",
            start: "Starten",

            /* Hero */
            heroBadge: "SOFTWARE / AUTOMATION / INTELLIGENCE",
            heroTitle: "Bringen Sie Ihr Unternehmen voran.",
            heroText:
                "KERVAQ entwickelt intelligente Software, die Unternehmen automatisiert, Prozesse vereinfacht und wertvolle Zeit zurückgibt.",
            heroPrimary: "Kontakt aufnehmen",
            heroSecondary: "Mehr erfahren",

            /* Solutions */
            solutionsEyebrow: "UNSERE LÖSUNGEN",
            solutionsTitle: "Weniger Arbeit. Mehr Fortschritt.",
            solutionsText:
                "Wir verbinden Automation, intelligente Systeme und effiziente Prozesse zu einer Technologieplattform für moderne Unternehmen.",

            automationTitle: "Automation",
            automationText:
                "Automatisieren Sie wiederkehrende Aufgaben und schaffen Sie Freiraum für die wirklich wichtigen Dinge.",
            automationDetails:
                "KERVAQ hilft dabei, manuelle Prozesse zu erkennen, zu automatisieren und dauerhaft effizienter zu gestalten.",

            intelligenceTitle: "Intelligence",
            intelligenceText:
                "Nutzen Sie intelligente Systeme, um Informationen schneller zu verstehen und bessere Entscheidungen zu treffen.",
            intelligenceDetails:
                "Daten, Prozesse und Informationen werden intelligent miteinander verbunden, damit Ihr Unternehmen schneller reagieren kann.",

            efficiencyTitle: "Efficiency",
            efficiencyText:
                "Weniger Aufwand, weniger Kosten und mehr Zeit für Ihr Unternehmen.",
            efficiencyDetails:
                "Durch optimierte Abläufe können Unternehmen Ressourcen sparen und gleichzeitig ihre Produktivität erhöhen.",

            more: "Mehr erfahren",
            moreClose: "Weniger anzeigen",

            /* About */
            aboutEyebrow: "ÜBER KERVAQ",
            aboutTitle: "Technologie soll Arbeit abnehmen.",
            aboutText:
                "Wir entwickeln Software mit einem klaren Ziel: Unternehmen sollen weniger Zeit mit manuellen Aufgaben verbringen und mehr Zeit für Wachstum haben.",
            aboutText2:
                "KERVAQ verbindet moderne Technologie mit einfachen, verständlichen Lösungen.",
            aboutLink: "Mehr über KERVAQ",

            /* Features */
            whyEyebrow: "WARUM KERVAQ",
            whyTitle: "Technologie mit einem klaren Zweck.",

            feature1Title: "Weniger Arbeit",
            feature1Text:
                "Automatisieren Sie Aufgaben, die täglich Zeit kosten.",

            feature2Title: "Weniger Kosten",
            feature2Text:
                "Effizientere Prozesse reduzieren unnötigen Aufwand.",

            feature3Title: "Mehr Zeit",
            feature3Text:
                "Gewinnen Sie Zeit für Wachstum, Kunden und Ihr Unternehmen.",

            /* CTA */
            ctaEyebrow: "BEREIT FÜR DEN NÄCHSTEN SCHRITT?",
            ctaTitle: "Bringen Sie Ihr Unternehmen voran.",
            ctaText:
                "Lassen Sie uns gemeinsam herausfinden, welche Prozesse in Ihrem Unternehmen automatisiert und verbessert werden können.",
            ctaButton: "Kontakt aufnehmen",

            /* AI */
            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Frag etwas über KERVAQ...",
            aiWelcome:
                "Hallo! Ich bin die KERVAQ AI. Wie kann ich dir helfen?",

            /* Footer */
            footerSolutions: "Lösungen",
            footerAbout: "Unternehmen",
            footerContact: "Rechtliches",
            footerPrivacy: "Datenschutz",
            footerImprint: "Impressum",

            /* Login */
            loginTitle: "Willkommen zurück.",
            loginText:
                "Melden Sie sich an, um auf Ihren KERVAQ-Bereich zuzugreifen.",
            loginEmail: "E-Mail-Adresse",
            loginPassword: "Passwort",
            loginButton: "Anmelden",
            loginNote:
                "Demo-Login: beliebige E-Mail-Adresse und Passwort verwenden.",
            loginError:
                "Bitte geben Sie eine E-Mail-Adresse und ein Passwort ein.",

            /* Dashboard */
            dashboardTitle: "Dashboard",
            dashboardWelcome: "Willkommen bei KERVAQ.",
            dashboardWelcomeText:
                "Hier entsteht Ihre zentrale Übersicht über Automationen, Prozesse und Unternehmensdaten.",
            statProjects: "Projekte",
            statAutomation: "Automationen",
            statTime: "Zeit gespart",
            statEfficiency: "Effizienz",
            activityTitle: "Aktivität",
            activityToday: "Heute",
            dashboardAI: "KERVAQ AI",
            dashboardAIText:
                "Ihre intelligente Assistenz für Fragen rund um KERVAQ.",
            comingSoon: "Coming Soon",
            logout: "Abmelden",

            /* Page Heroes */
            solutionsPageTitle: "Unsere Lösungen",
            solutionsPageText:
                "Software, die Prozesse vereinfacht, Aufgaben automatisiert und Unternehmen effizienter macht.",

            aboutPageTitle: "Über KERVAQ",
            aboutPageText:
                "Wir entwickeln Technologie, die Unternehmen hilft, schneller, einfacher und effizienter zu arbeiten.",

            contactPageTitle: "Kontakt",
            contactPageText:
                "Sprechen wir darüber, wie KERVAQ Ihr Unternehmen voranbringen kann.",

            /* Contact */
            contactEmail: "E-Mail",
            contactMessage: "Nachricht",
            contactName: "Name",
            contactCompany: "Unternehmen",
            contactSend: "Nachricht senden",

            /* Legal */
            privacyTitle: "Datenschutz",
            imprintTitle: "Impressum"
        },


        en: {

            /* Navigation */
            solutions: "Solutions",
            about: "About us",
            contact: "Contact",
            login: "Login",
            start: "Get started",

            /* Hero */
            heroBadge: "SOFTWARE / AUTOMATION / INTELLIGENCE",
            heroTitle: "Move your business forward.",
            heroText:
                "KERVAQ develops intelligent software that automates businesses, simplifies processes and gives valuable time back.",
            heroPrimary: "Get in touch",
            heroSecondary: "Learn more",

            /* Solutions */
            solutionsEyebrow: "OUR SOLUTIONS",
            solutionsTitle: "Less work. More progress.",
            solutionsText:
                "We combine automation, intelligent systems and efficient processes into a technology platform for modern businesses.",

            automationTitle: "Automation",
            automationText:
                "Automate repetitive tasks and create more space for what really matters.",
            automationDetails:
                "KERVAQ helps identify manual processes, automate them and make them permanently more efficient.",

            intelligenceTitle: "Intelligence",
            intelligenceText:
                "Use intelligent systems to understand information faster and make better decisions.",
            intelligenceDetails:
                "Data, processes and information are intelligently connected so your business can react faster.",

            efficiencyTitle: "Efficiency",
            efficiencyText:
                "Less effort, lower costs and more time for your business.",
            efficiencyDetails:
                "Optimized workflows help businesses save resources while increasing productivity.",

            more: "Learn more",
            moreClose: "Show less",

            /* About */
            aboutEyebrow: "ABOUT KERVAQ",
            aboutTitle: "Technology should take work off your hands.",
            aboutText:
                "We develop software with one clear goal: businesses should spend less time on manual tasks and more time growing.",
            aboutText2:
                "KERVAQ combines modern technology with simple, understandable solutions.",
            aboutLink: "More about KERVAQ",

            /* Features */
            whyEyebrow: "WHY KERVAQ",
            whyTitle: "Technology with a clear purpose.",

            feature1Title: "Less work",
            feature1Text:
                "Automate tasks that consume valuable time every day.",

            feature2Title: "Lower costs",
            feature2Text:
                "More efficient processes reduce unnecessary effort.",

            feature3Title: "More time",
            feature3Text:
                "Gain time for growth, customers and your business.",

            /* CTA */
            ctaEyebrow: "READY FOR THE NEXT STEP?",
            ctaTitle: "Move your business forward.",
            ctaText:
                "Let's find out together which processes in your business can be automated and improved.",
            ctaButton: "Get in touch",

            /* AI */
            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Ask something about KERVAQ...",
            aiWelcome:
                "Hello! I'm KERVAQ AI. How can I help you?",

            /* Footer */
            footerSolutions: "Solutions",
            footerAbout: "Company",
            footerContact: "Legal",
            footerPrivacy: "Privacy",
            footerImprint: "Imprint",

            /* Login */
            loginTitle: "Welcome back.",
            loginText:
                "Log in to access your KERVAQ area.",
            loginEmail: "Email address",
            loginPassword: "Password",
            loginButton: "Log in",
            loginNote:
                "Demo login: use any email address and password.",
            loginError:
                "Please enter an email address and password.",

            /* Dashboard */
            dashboardTitle: "Dashboard",
            dashboardWelcome: "Welcome to KERVAQ.",
            dashboardWelcomeText:
                "Your central overview of automations, processes and business data will live here.",
            statProjects: "Projects",
            statAutomation: "Automations",
            statTime: "Time saved",
            statEfficiency: "Efficiency",
            activityTitle: "Activity",
            activityToday: "Today",
            dashboardAI: "KERVAQ AI",
            dashboardAIText:
                "Your intelligent assistant for questions about KERVAQ.",
            comingSoon: "Coming Soon",
            logout: "Log out",

            /* Page Heroes */
            solutionsPageTitle: "Our solutions",
            solutionsPageText:
                "Software that simplifies processes, automates tasks and makes businesses more efficient.",

            aboutPageTitle: "About KERVAQ",
            aboutPageText:
                "We build technology that helps businesses work faster, simpler and more efficiently.",

            contactPageTitle: "Contact",
            contactPageText:
                "Let's talk about how KERVAQ can move your business forward.",

            /* Contact */
            contactEmail: "Email",
            contactMessage: "Message",
            contactName: "Name",
            contactCompany: "Company",
            contactSend: "Send message",

            /* Legal */
            privacyTitle: "Privacy Policy",
            imprintTitle: "Imprint"
        },


        fr: {

            /* Navigation */
            solutions: "Solutions",
            about: "À propos",
            contact: "Contact",
            login: "Connexion",
            start: "Commencer",

            /* Hero */
            heroBadge: "LOGICIEL / AUTOMATISATION / INTELLIGENCE",
            heroTitle: "Faites avancer votre entreprise.",
            heroText:
                "KERVAQ développe des logiciels intelligents qui automatisent les entreprises, simplifient les processus et rendent du temps précieux.",
            heroPrimary: "Nous contacter",
            heroSecondary: "En savoir plus",

            /* Solutions */
            solutionsEyebrow: "NOS SOLUTIONS",
            solutionsTitle: "Moins de travail. Plus de progrès.",
            solutionsText:
                "Nous combinons automatisation, systèmes intelligents et processus efficaces dans une plateforme technologique pour les entreprises modernes.",

            automationTitle: "Automatisation",
            automationText:
                "Automatisez les tâches répétitives et libérez du temps pour ce qui compte vraiment.",
            automationDetails:
                "KERVAQ aide à identifier les processus manuels, à les automatiser et à les rendre durablement plus efficaces.",

            intelligenceTitle: "Intelligence",
            intelligenceText:
                "Utilisez des systèmes intelligents pour comprendre plus rapidement les informations et prendre de meilleures décisions.",
            intelligenceDetails:
                "Les données, processus et informations sont connectés intelligemment afin que votre entreprise puisse réagir plus rapidement.",

            efficiencyTitle: "Efficacité",
            efficiencyText:
                "Moins d'efforts, moins de coûts et plus de temps pour votre entreprise.",
            efficiencyDetails:
                "Des processus optimisés permettent d'économiser des ressources tout en augmentant la productivité.",

            more: "En savoir plus",
            moreClose: "Afficher moins",

            /* About */
            aboutEyebrow: "À PROPOS DE KERVAQ",
            aboutTitle: "La technologie doit vous faciliter le travail.",
            aboutText:
                "Nous développons des logiciels avec un objectif clair : permettre aux entreprises de consacrer moins de temps aux tâches manuelles et davantage à leur croissance.",
            aboutText2:
                "KERVAQ combine technologie moderne et solutions simples et compréhensibles.",
            aboutLink: "En savoir plus sur KERVAQ",

            /* Features */
            whyEyebrow: "POURQUOI KERVAQ",
            whyTitle: "Une technologie avec un objectif clair.",

            feature1Title: "Moins de travail",
            feature1Text:
                "Automatisez les tâches qui prennent du temps chaque jour.",

            feature2Title: "Moins de coûts",
            feature2Text:
                "Des processus plus efficaces réduisent les efforts inutiles.",

            feature3Title: "Plus de temps",
            feature3Text:
                "Gagnez du temps pour la croissance, vos clients et votre entreprise.",

            /* CTA */
            ctaEyebrow: "PRÊT POUR LA PROCHAINE ÉTAPE ?",
            ctaTitle: "Faites avancer votre entreprise.",
            ctaText:
                "Découvrons ensemble quels processus de votre entreprise peuvent être automatisés et améliorés.",
            ctaButton: "Nous contacter",

            /* AI */
            aiTitle: "KERVAQ AI",
            aiPlaceholder: "Posez une question sur KERVAQ...",
            aiWelcome:
                "Bonjour ! Je suis KERVAQ AI. Comment puis-je vous aider ?",

            /* Footer */
            footerSolutions: "Solutions",
            footerAbout: "Entreprise",
            footerContact: "Mentions légales",
            footerPrivacy: "Confidentialité",
            footerImprint: "Mentions légales",

            /* Login */
            loginTitle: "Bon retour.",
            loginText:
                "Connectez-vous pour accéder à votre espace KERVAQ.",
            loginEmail: "Adresse e-mail",
            loginPassword: "Mot de passe",
            loginButton: "Se connecter",
            loginNote:
                "Connexion de démonstration : utilisez n'importe quelle adresse e-mail et mot de passe.",
            loginError:
                "Veuillez saisir une adresse e-mail et un mot de passe.",

            /* Dashboard */
            dashboardTitle: "Tableau de bord",
            dashboardWelcome: "Bienvenue chez KERVAQ.",
            dashboardWelcomeText:
                "Votre aperçu central des automatisations, processus et données d'entreprise se trouvera ici.",
            statProjects: "Projets",
            statAutomation: "Automatisations",
            statTime: "Temps économisé",
            statEfficiency: "Efficacité",
            activityTitle: "Activité",
            activityToday: "Aujourd'hui",
            dashboardAI: "KERVAQ AI",
            dashboardAIText:
                "Votre assistant intelligent pour les questions concernant KERVAQ.",
            comingSoon: "Bientôt disponible",
            logout: "Déconnexion",

            /* Page Heroes */
            solutionsPageTitle: "Nos solutions",
            solutionsPageText:
                "Des logiciels qui simplifient les processus, automatisent les tâches et rendent les entreprises plus efficaces.",

            aboutPageTitle: "À propos de KERVAQ",
            aboutPageText:
                "Nous développons une technologie qui aide les entreprises à travailler plus rapidement, simplement et efficacement.",

            contactPageTitle: "Contact",
            contactPageText:
                "Parlons de la manière dont KERVAQ peut faire avancer votre entreprise.",

            /* Contact */
            contactEmail: "E-mail",
            contactMessage: "Message",
            contactName: "Nom",
            contactCompany: "Entreprise",
            contactSend: "Envoyer le message",

            /* Legal */
            privacyTitle: "Confidentialité",
            imprintTitle: "Mentions légales"
        }

    };


    /* =========================================
       LANGUAGE
    ========================================= */

    const savedLanguage =
        localStorage.getItem("kervaq-language") || "de";

    let currentLanguage =
        translations[savedLanguage]
            ? savedLanguage
            : "de";


    function applyTranslations() {

        const language = translations[currentLanguage];

        document.documentElement.lang = currentLanguage;

        /* Text translations */

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;

            if (language[key] !== undefined) {
                element.innerHTML = language[key];
            }

        });


        /* Placeholder translations */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.dataset.i18nPlaceholder;

                if (language[key] !== undefined) {
                    element.placeholder = language[key];
                }

            });


        /* Language buttons */

        document
            .querySelectorAll(".lang-btn")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.lang === currentLanguage
                );

            });


        updateOpenCardTexts();

    }


    document
        .querySelectorAll(".lang-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const language =
                    button.dataset.lang;

                if (!translations[language]) {
                    return;
                }

                currentLanguage = language;

                localStorage.setItem(
                    "kervaq-language",
                    currentLanguage
                );

                applyTranslations();

            });

        });


    /* =========================================
       EXPANDABLE CARDS
    ========================================= */

    function updateOpenCardTexts() {

        document
            .querySelectorAll(".card.open .learn-more")
            .forEach(button => {

                const language =
                    translations[currentLanguage];

                button.innerHTML =
                    language.moreClose || language.more;

            });

    }


    document
        .querySelectorAll(".card .learn-more")
        .forEach(button => {

            button.addEventListener("click", () => {

                const card =
                    button.closest(".card");

                if (!card) {
                    return;
                }

                const details =
                    card.querySelector(".card-details");

                if (!details) {
                    return;
                }


                document
                    .querySelectorAll(".card.open")
                    .forEach(openCard => {

                        if (openCard !== card) {

                            openCard.classList.remove("open");

                            const openButton =
                                openCard.querySelector(".learn-more");

                            if (openButton) {

                                openButton.innerHTML =
                                    translations[currentLanguage].more;

                            }

                        }

                    });


                card.classList.toggle("open");

                updateOpenCardTexts();

            });

        });


    /* =========================================
       MOBILE MENU
    ========================================= */

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const navRight =
        document.querySelector(".nav-right");


    if (mobileMenu && navRight) {

        mobileMenu.addEventListener("click", () => {

            navRight.classList.toggle("mobile-open");

            mobileMenu.classList.toggle("active");

        });


        navRight
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navRight.classList.remove("mobile-open");

                    mobileMenu.classList.remove("active");

                });

            });

    }


    /* =========================================
       AI CHAT
    ========================================= */

    const aiOpen =
        document.querySelector(".ai-open");

    const aiChat =
        document.querySelector(".ai-chat");

    const aiClose =
        document.querySelector(".ai-close");

    const aiForm =
        document.querySelector(".ai-form");

    const aiInput =
        document.querySelector(".ai-form input");

    const aiMessages =
        document.querySelector(".ai-messages");


    if (aiOpen && aiChat) {

        aiOpen.addEventListener("click", () => {

            aiChat.classList.add("active");

        });

    }


    if (aiClose && aiChat) {

        aiClose.addEventListener("click", () => {

            aiChat.classList.remove("active");

        });

    }


    if (aiForm && aiInput && aiMessages) {

        aiForm.addEventListener("submit", event => {

            event.preventDefault();

            const message =
                aiInput.value.trim();

            if (!message) {
                return;
            }


            const userMessage =
                document.createElement("div");

            userMessage.className =
                "ai-message ai-message-user";

            userMessage.innerHTML =
                `<p>${escapeHtml(message)}</p>`;

            aiMessages.appendChild(userMessage);


            aiInput.value = "";


            setTimeout(() => {

                const botMessage =
                    document.createElement("div");

                botMessage.className =
                    "ai-message ai-message-bot";

                botMessage.innerHTML =
                    `<p>${getAIResponse(message)}</p>`;

                aiMessages.appendChild(botMessage);

                aiMessages.scrollTop =
                    aiMessages.scrollHeight;

            }, 500);

        });

    }


    function escapeHtml(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    function getAIResponse(message) {

        const text =
            message.toLowerCase();


        if (
            text.includes("kervaq") ||
            text.includes("was") ||
            text.includes("what")
        ) {

            if (currentLanguage === "en") {

                return "KERVAQ develops intelligent software for automation, efficiency and business growth.";

            }

            if (currentLanguage === "fr") {

                return "KERVAQ développe des logiciels intelligents pour l'automatisation, l'efficacité et la croissance des entreprises.";

            }

            return "KERVAQ entwickelt intelligente Software für Automation, Effizienz und Unternehmenswachstum.";

        }


        if (
            text.includes("automation") ||
            text.includes("automatis")
        ) {

            if (currentLanguage === "en") {

                return "KERVAQ helps automate repetitive processes and reduce manual work.";

            }

            if (currentLanguage === "fr") {

                return "KERVAQ aide à automatiser les processus répétitifs et à réduire le travail manuel.";

            }

            return "KERVAQ hilft dabei, wiederkehrende Prozesse zu automatisieren und manuelle Arbeit zu reduzieren.";

        }


        if (currentLanguage === "en") {

            return "I'm the KERVAQ AI demo. Ask me about KERVAQ, automation or our solutions.";

        }

        if (currentLanguage === "fr") {

            return "Je suis la démo de KERVAQ AI. Posez-moi une question sur KERVAQ, l'automatisation ou nos solutions.";

        }

        return "Ich bin die KERVAQ AI Demo. Frag mich gerne etwas über KERVAQ, Automation oder unsere Lösungen.";

    }


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm =
        document.querySelector(".contact-form");


    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const button =
                contactForm.querySelector("button[type='submit']");

            if (!button) {
                return;
            }

            const originalText =
                button.innerHTML;


            if (currentLanguage === "en") {

                button.innerHTML = "Message sent ✓";

            } else if (currentLanguage === "fr") {

                button.innerHTML = "Message envoyé ✓";

            } else {

                button.innerHTML = "Nachricht gesendet ✓";

            }


            button.disabled = true;


            setTimeout(() => {

                button.innerHTML = originalText;

                button.disabled = false;

                contactForm.reset();

            }, 2500);

        });

    }


    /* =========================================
       LOGIN
    ========================================= */

    const loginForm =
        document.querySelector(".login-form");


    if (loginForm) {

        loginForm.addEventListener("submit", event => {

            event.preventDefault();


            const email =
                loginForm.querySelector("input[type='email']");

            const password =
                loginForm.querySelector("input[type='password']");

            const error =
                document.querySelector(".login-error");


            if (
                !email ||
                !password ||
                !email.value.trim() ||
                !password.value.trim()
            ) {

                if (error) {

                    error.textContent =
                        translations[currentLanguage].loginError;

                    error.classList.add("show");

                }

                return;

            }


            if (error) {

                error.classList.remove("show");

            }


            sessionStorage.setItem(
                "kervaq-user",
                email.value.trim()
            );


            window.location.href =
                "dashboard.html";

        });

    }


    /* =========================================
       DASHBOARD
    ========================================= */

    const dashboard =
        document.querySelector(".dashboard");


    if (dashboard) {

        const user =
            sessionStorage.getItem("kervaq-user");


        if (!user) {

            window.location.href =
                "login.html";

        } else {

            const userEmail =
                document.querySelector(".user-email");

            const userAvatar =
                document.querySelector(".user-avatar");


            if (userEmail) {

                userEmail.textContent =
                    user;

            }


            if (userAvatar) {

                userAvatar.textContent =
                    user.charAt(0).toUpperCase();

            }

        }

    }


    /* =========================================
       LOGOUT
    ========================================= */

    const logoutButton =
        document.querySelector(".logout-btn");


    if (logoutButton) {

        logoutButton.addEventListener("click", () => {

            sessionStorage.removeItem(
                "kervaq-user"
            );

            window.location.href =
                "login.html";

        });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(".nav-right a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (!href) {
                return;
            }


            if (
                href.toLowerCase() === currentPage
            ) {

                link.classList.add("active");

            }

        });


    /* =========================================
       INITIALIZE
    ========================================= */

    applyTranslations();

});
