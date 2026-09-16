/* =========================
   KERVAQ
   CARD INTERACTIONS
========================= */


const cards =
    document.querySelectorAll(".feature-card");


/* =========================
   MEHR ERFAHREN
========================= */

cards.forEach(function(card) {

    const button =
        card.querySelector(".learn-more");


    button.addEventListener("click", function() {


        cards.forEach(function(otherCard) {

            if (otherCard !== card) {

                otherCard.classList.remove("active");

            }

        });


        card.classList.toggle("active");

    });

});



/* =========================
   3D CARD EFFECT
========================= */

cards.forEach(function(card) {


    card.addEventListener("mousemove", function(event) {


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateX =
            (y / rect.height - 0.5) * -5;


        const rotateY =
            (x / rect.width - 0.5) * 5;


        card.style.transform =
            "perspective(700px) " +
            "rotateX(" + rotateX + "deg) " +
            "rotateY(" + rotateY + "deg) " +
            "translateY(-5px)";

    });


    card.addEventListener("mouseleave", function() {


        card.style.transform =
            "perspective(700px) " +
            "rotateX(0deg) " +
            "rotateY(0deg) " +
            "translateY(0px)";

    });

});



/* =========================
   MOUSE PARALLAX FÜR CORE
========================= */

const heroVisual =
    document.querySelector(".hero-visual");


const orb =
    document.querySelector(".orb");


if (heroVisual && orb) {


    heroVisual.addEventListener(
        "mousemove",
        function(event) {


            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const moveX =
                (x / rect.width - 0.5) * 14;


            const moveY =
                (y / rect.height - 0.5) * 14;


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
                "translate(-50%, -50%)";

        }
    );

}
