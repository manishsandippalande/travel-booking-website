var dests = [
    {
        sno:0,
        name:"Jaipur",
        packge: 39999,
        desc: "Where history and vibrant culture collide. Discover majestic palaces, rich cuisine, and the warmth of its people in the Pink City.",
        stay: "2 day 2 Night",
        dimg:"poster/jaipur.jpg"
    },
    {
        sno:1,
        name:"Kashmir",
        packge: 49999,
        desc: "Where nature's beauty meets tranquility. Explore serene landscapes, pristine lakes, and warm hospitality in the Paradise on Earth.",
        stay: "2 day 3 Night",
        dimg:"poster/kashmir.jpg"
    },
    {
        sno:2,
        name:"Goa",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/goa.jpg"
    },
    {
        sno:3,
        name:"Delhi",
        packge: 20999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/delhi.jpg"
    },
    {
        sno:4,
        name:"Kolkata",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/kolkata.jpg"
    },
    {
        sno:5,
        name:"Agra",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/agra.jpg"
    },
    {
        sno:6,
        name:"Mumbai",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/mumbai.jpg"
    },
    {
        sno:7,
        name:"Banaras",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/varanasi.jpg"
    },
    {
        sno:8,
        name:"Himachal",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/himachal.jpg"
    },
    {
        sno:9,
        name:"Kedarnath",
        packge: 30999,
        desc: "Where sun, sand, and endless fun unite. Enjoy beautiful beaches, vibrant nightlife, and the spirit of the party capital of India.",
        stay: "2 day 2 Night",
        dimg:"poster/kedarnath.jpg"
    },
]

var cardscont = document.getElementById("cards-cont")

dests.forEach(dest => {
    cardscont.innerHTML+=`<div class="card" id=${dest.sno} onclick="clickcard(this)">
    <h4 class="card-title">${dest.name}</h4>
    <img src="${dest.dimg}" alt="">
</div>`
});

// let card = document.getElementsByClassName("card")
let poster = document.getElementById("bgimg")
let title = document.getElementById("main-title")
let desc = document.getElementById("main-info")
function clickcard(card){
    poster.src = dests[card.id].dimg
    title.innerHTML = dests[card.id].name
    desc.innerHTML = dests[card.id].desc
}


document.getElementById("scrollbtn").addEventListener("click", ()=>{
    
})

