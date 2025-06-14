let theme = document.querySelector('.theme');
let currMode = document.querySelector('body').style.backgroundColor;
let body = document.querySelector('body');
// let currMode = "light";

theme.addEventListener("click", () => {
    if(currMode === "") {
        currMode = "dark";
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        currMode = ""
        body.classList.remove('dark');
        body.classList.add('light');
    }
})