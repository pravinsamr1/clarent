document.addEventListener("DOMContentLoaded", () => {

    fetch("header.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

            // Active Menu Logic
            const currentPage = window.location.pathname.split("/").pop();

            const navLinks = document.querySelectorAll(".main-menu ul li a");

            navLinks.forEach(link => {

                const linkPage = link.getAttribute("href");

                if (linkPage === currentPage) {

                    // remove previous active classes
                    document.querySelectorAll(".main-menu li").forEach(item => {
                        item.classList.remove("active");
                    });

                    // add active class
                    link.closest("li").classList.add("active");
                }
            });

        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});