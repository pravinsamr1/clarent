document.addEventListener("DOMContentLoaded", () => {

    const headerContainer = document.getElementById("header");
    if (headerContainer) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                headerContainer.innerHTML = data;

                // Active Menu Logic
                const currentPage = window.location.pathname.split("/").pop() || "index.html";
                const navLinks = document.querySelectorAll(".main-menu ul li a");

                navLinks.forEach(link => {
                    const linkPage = link.getAttribute("href");
                    if (linkPage === currentPage) {
                        // remove previous active classes
                        document.querySelectorAll(".main-menu li").forEach(item => {
                            item.classList.remove("active");
                        });
                        // add active class
                        const closestLi = link.closest("li");
                        if (closestLi) {
                            closestLi.classList.add("active");
                        }
                    }
                });

                // Dispatch custom event to notify other scripts that header is loaded
                document.dispatchEvent(new CustomEvent("headerLoaded"));
            })
            .catch(err => console.error("Error loading header:", err));
    }

    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                footerContainer.innerHTML = data;
                // Dispatch custom event to notify other scripts that footer is loaded
                document.dispatchEvent(new CustomEvent("footerLoaded"));
            })
            .catch(err => console.error("Error loading footer:", err));
    }

});