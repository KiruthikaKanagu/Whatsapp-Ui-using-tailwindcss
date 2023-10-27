// udanpirapu chat log

let bro = document.querySelector(".bro")
bro.addEventListener("click", event => {
    window.location.href = "profile.html";
})

// setting toogle
const dotButton = document.getElementById("three-dot");

let dropDown = document.getElementById("dropdown-menu");


dotButton.addEventListener("click", () => {
    let dropdownClassList = dropDown.classList;
    let containInvisible = dropdownClassList.contains("invisible")
    if (containInvisible === true) {
        dropDown.classList.remove("invisible");
    }
    else {
        dropDown.classList.add("invisible");
    }

});
