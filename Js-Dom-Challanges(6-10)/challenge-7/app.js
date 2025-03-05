const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {  
    const button = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");
    const arrow = item.querySelector(".arrow");

    button.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        if (!isActive) {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px"; // Expand smoothly
            arrow.style.transform = "rotate(180deg)";
        } else {
            item.classList.remove("active");
            content.style.maxHeight = "0px"; // Collapse smoothly
            arrow.style.transform = "rotate(0deg)";
        }
    });
});
