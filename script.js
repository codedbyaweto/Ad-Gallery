const togglebutton = document.querySelector(".light-dark-toggle");

togglebutton.addEventListener("click", () => {
    document.body.classList.toggle("light");
});