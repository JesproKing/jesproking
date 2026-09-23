document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------
       MOBILE NAVIGATION
    -------------------------------- */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }


    /* --------------------------------
       CURRENT YEAR
    -------------------------------- */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* --------------------------------
       SCROLL REVEAL
    -------------------------------- */

    const revealElements = document.querySelectorAll(
        ".game-card, .about-text, .skills, .contact-content"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);
                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }


    /* --------------------------------
       CLOSE MOBILE MENU WITH ESC
    -------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            navLinks?.classList.remove("active");
        }

    });


    /* --------------------------------
       SMOOTH ANCHOR OFFSET
    -------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight = 76;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });

});