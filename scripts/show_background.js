const bgc = sessionStorage.getItem('bgc');
if (bgc) {
    document.body.style.backgroundColor = bgc;
}