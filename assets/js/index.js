const menuLinks = document.querySelectorAll('.nav-link');

window.onload = () => {
    updateLinks()
}

window.addEventListener('hashchange', function (e) {
    updateLinks()
});

//set active menu-link based on URL
const updateLinks = () => {
    let currentLocation = location.href.split('#');
    let searchId;
    if (typeof currentLocation != "string") {
        if (currentLocation.at(-1) == '')
            searchId = "home-link";
        else
            searchId = currentLocation.at(-1) + "-link";

        for (const link of document.querySelectorAll(".nav-link.active")) { link.classList.remove("active"); }
        document.getElementById(searchId).classList.add('active');
    }
}

//toggle active class on menu-links
menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        for (const link of document.querySelectorAll(".nav-link.active")) { link.classList.remove("active"); }
        e.target.classList.add("active")
        location.href = e.target.href;
    })
})