function Toggle(x) {
    x.classList.toggle("change");
    addActive();
}
function addActive(){
    var element = document.getElementById("Menu");
    element.classList.toggle("Active");
}