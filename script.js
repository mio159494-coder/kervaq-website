const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * -8;
        const rotateY = (x / rect.width - 0.5) * 8;

        card.style.transform =
            `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(600px) rotateX(0) rotateY(0) translateY(0)";
    });

});
