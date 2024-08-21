const infos = [
    {
        bgImage: "bb",
        h3: 'fashion',
        h1: 'KHY <br> Fast Fashion Favourites'
    },
    {
        bgImage: "preloaded-image-2",
        h3: 'high jewelry',
        h1: 'BVLGARI <br> Old Money Luxury'
    },
    {
        bgImage: "preloaded-image-3",
        h3: 'runway',
        h1: 'Jennie makes her runway debut at Jacquemus show'
    },
    {
        bgImage: "preloaded-image-4",
        h3: 'destinations',
        h1: 'OSAKA, JAPAN <br> Prepare for your next trip'
    }
],
    header = document.getElementById("header"),
    h3 = document.getElementById("category"),
    h1 = document.getElementById("description")

let current_position = 0

function render_image_text(index) {
    const header_classlist = header.classList

    for (let i = 0; i < header_classlist.length; i++) {
        const class_name = header_classlist[i];

        if (class_name.startsWith("preloaded-image")) header.classList.replace(class_name, infos[index].bgImage)

        else header.classList.add(infos[index].bgImage)
    }
    
    h3.innerText = infos[index].h3
    h1.innerHTML = infos[index].h1
}

function switch_to_next() {
    current_position += 1

    if (current_position === infos.length) current_position = 0


    render_image_text(current_position)
}

function switch_to_previous() {
    current_position -= 1

    if (current_position < 0) current_position = infos.length

    render_image_text(current_position)
}

function start_slideshow() {
    setInterval(switch_to_next, 5000)
}

// addEventListener("load", () => {
//     start_slideshow()    
// })

document.getElementById("open-nav-bar").addEventListener("click", e => {
    if (document.getElementById("mobile-nav-bar").classList.contains("closed")) document.getElementById("mobile-nav-bar").classList.replace("closed", "opened")
    else document.getElementById("mobile-nav-bar").classList.add("opened")
})

document.getElementById("close-mobile-nav-bar").addEventListener("click", e => {
    if (document.getElementById("mobile-nav-bar").classList.contains("opened")) document.getElementById("mobile-nav-bar").style.animationDirection = "reverse"

    document.getElementById("mobile-nav-bar").classList.remove("opened")
})