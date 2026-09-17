const pertanyaan = document.querySelectorAll(".faq-question");

pertanyaan.forEach(function (button) {
    button.addEventListener("click", function () {

        const jawaban = document.getElementById(
            button.getAttribute("aria-controls")
        );

        const sedangTerbuka =
            button.getAttribute("aria-expanded") === "true";

        pertanyaan.forEach(function (item) {
            const jawabanLain = document.getElementById(
                item.getAttribute("aria-controls")
            );

            item.setAttribute("aria-expanded", "false");
            jawabanLain.classList.remove("is-open");
        });

        if (!sedangTerbuka) {
            button.setAttribute("aria-expanded", "true");
            jawaban.classList.add("is-open");
        }
    });
});