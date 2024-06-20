export function doDropDown() {
    document.getElementById("contact-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.navbutton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 1; i < dropdowns.length; ++i) {
            var openDropDown = dropdowns[i];
            if (openDropDown.classList.contains("show")) {
                openDropDown.classList.remove("show");
            }
        }
    }
}