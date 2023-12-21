
let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let random = Math.floor(Math.random() * 3);
let user = document.querySelector(".user"); // Assuming user is a single element
let pc = document.querySelector(".pc"); // Assuming pc is a single element

con.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        con.forEach(item => {
            item.style.display = "none";
        });
        element.style.display = "block";
        element.classList.add("show");

        // setTimeout used to set a time to happen an event after a defined time
        setTimeout(() => {
            pc.style.opacity = "1";
            setTimeout(() => {
                con[random].style.display = "block";
                con[random].classList.add("right");
            }, 1000);
        }, 500);
    });
});
