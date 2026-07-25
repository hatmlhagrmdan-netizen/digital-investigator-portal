/* ======================================================
   بوابة المحقق الرقمي
   app.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* Loader */

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }

    /* Sticky Navbar */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* Counter */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = Number(counter.dataset.target);

            const value = Number(counter.innerText);

            const speed = target / 120;

            if (value < target) {

                counter.innerText = Math.ceil(value + speed);

                setTimeout(update, 20);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

    /* Scroll Progress */

    const progress = document.getElementById("progress");

    window.addEventListener("scroll", () => {

        const total = document.documentElement.scrollHeight - window.innerHeight;

        const percent = (window.scrollY / total) * 100;

        if (progress) {

            progress.style.width = percent + "%";

        }

    });

    /* Back To Top */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    if (topBtn) {

        topBtn.onclick = () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        };

    }

    /* Reveal Animation */

    const reveal = document.querySelectorAll(".reveal");

    function animate() {

        reveal.forEach(item => {

            const top = item.getBoundingClientRect().top;

            const visible = 120;

            if (top < window.innerHeight - visible) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", animate);

    animate();

    /* Search */

    const search = document.getElementById("search");

    if (search) {

        search.addEventListener("keyup", () => {

            let value = search.value.toLowerCase();

            document.querySelectorAll(".search-item").forEach(card => {

                if (card.innerText.toLowerCase().includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    /* Theme */

    const theme = document.getElementById("theme");

    if (theme) {

        theme.onclick = () => {

            document.body.classList.toggle("light");

            localStorage.setItem(

                "theme",

                document.body.classList.contains("light")

            );

        };

    }

    if (localStorage.getItem("theme") === "true") {

        document.body.classList.add("light");

    }

});

/* Particle Background */

if (typeof particlesJS !== "undefined") {

particlesJS("particles-js",{

particles:{
number:{value:90},
color:{value:"#00e5ff"},
shape:{type:"circle"},
opacity:{value:0.4},
size:{value:3},
move:{
enable:true,
speed:2
},
line_linked:{
enable:true,
distance:150,
color:"#00e5ff",
opacity:0.25
}
},
interactivity:{
events:{
onhover:{enable:true,mode:"grab"},
onclick:{enable:true,mode:"push"}
}
}
});

            }
