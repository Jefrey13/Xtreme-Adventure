const scrollRevealOption={
    distance:"50px",
    origin: "bottom",
    duration:1000,
};

//Header
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
})
ScrollReveal().reveal(".header__form", {
    ...scrollRevealOption,
    delay: 400
})

//Trending
ScrollReveal().reveal(".trending__card", {
    ...scrollRevealOption,
    interval: 400
})

//Destination
ScrollReveal().reveal(".destination__card", {
    duration:1000,
    interval:400,
})
//Seller
ScrollReveal().reveal(".seller__card", {
    ...scrollRevealOption,
    interval: 400
})
//Guide
ScrollReveal().reveal(".guide__card", {
    ...scrollRevealOption,
    interval: 400
})
//Client
ScrollReveal().reveal(".client__card", {
    ...scrollRevealOption,
    interval: 400
})