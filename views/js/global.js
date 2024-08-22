document.getElementById("open-nav-bar").addEventListener("click", e => {
    if (document.getElementById("mobile-nav-bar").classList.contains("closed")) document.getElementById("mobile-nav-bar").classList.replace("closed", "opened")
    else document.getElementById("mobile-nav-bar").classList.add("opened")
})

document.getElementById("close-mobile-nav-bar").addEventListener("click", e => {
    if (document.getElementById("mobile-nav-bar").classList.contains("opened")) document.getElementById("mobile-nav-bar").style.animationDirection = "reverse"

    document.getElementById("mobile-nav-bar").classList.remove("opened")
})

document.getElementById("open-search").addEventListener("click", e => {
    document.querySelector(".search-expanded").classList.add("visible")
})

document.getElementById("close-search").addEventListener("click", e => {
    document.querySelector(".search-expanded").classList.remove("visible")
})