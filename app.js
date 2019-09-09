
function changeIcon() {
    const toggler = document.querySelector(".navbar-toggler-icon");
    const closedBook = document.querySelector(".toggler-icon-closed");
    const openBook = toggler.firstElementChild;


    toggler.addEventListener("click", (e) => {
        let clickedIcon = e.target;

        if (clickedIcon.classList.contains("open-nav")) {
            clickedIcon.style.display = "none";
            closedBook.style.display = "block";
        } else if (clickedIcon.classList.contains("close-nav")) {
            clickedIcon.style.display = "none";
            openBook.style.display = "block";
        }

    })
}

changeIcon();