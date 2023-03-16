const menuLinks = document.querySelectorAll('.nav-link');

//set active link on page load given in URL
window.onload = () => {
    let currentLocation = location.href.split('#');
    let searchId;
    if (typeof currentLocation != "string") {
        if (currentLocation.at(-1) == '')
            searchId = "home-link";
        else
            searchId = currentLocation.at(-1) + "-link";
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