let body = document.querySelector("body");
document.querySelector("#random").onclick = function () {
    body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};