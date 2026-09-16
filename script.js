/* =========================
   KERVAQ CARD INTERACTIONS
========================= */


const cards = document.querySelectorAll(".feature-card");


cards.forEach(card => {


    const button = card.querySelector(".learn-more");


    /* =========================
       MEHR ERFAHREN
    ========================== */

    button.addEventListener("click", () => {


        cards.forEach(otherCard => {

            if (otherCard !== card) {

                otherCard.classList.remove("active");

            }

        });


        card.classList.toggle("active");


    });



    /* =========================
       3D HOVER
    ========================== */

    card.addEventListener("mousemove", event => {


        const rect = card.getBoundingClientRect();


        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;


        const rotateX =
            (y / rect.height - 0.5) * -6;


        const rotateY =
            (x / rect.width - 0.5) * 6;


        card.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;


    });



    /* =========================
       HOVER ZURÜCKSETZEN
    ========================== */

    card.addEventListener("mouseleave", () => {


        card.style.transform =
            "perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)";


    });


});
