const services = [
  {
    id: 1,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 2,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 3,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 4,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 5,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 6,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 7,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
  {
    id: 8,
    title: "Branding Design",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt sed mi posuere in amet turpis nunc, nisl.",
  },
];

const cards = document.querySelector(".services_con .cards");

services.forEach((item) => {
  cards.innerHTML += `<div class="card">
      <div class="icon_con">
        <span
          style="color: #e92129; font-size: 43px"
          class="material-symbols-outlined"
        >
          experiment
        </span>
      </div>
      <h4 class="title">${item.title}</h4>
      <p class="content">${item.content}</p>
    </div>`;
});


const sponsorLogo = [
  {
    id: 1,
    url: "imgs/image_8.png"
  },
  {
    id: 2,
    url: "imgs/image_9.png"
  },
  {
    id: 3,
    url: "imgs/image_10.png"
  },
  {
    id: 4,
    url: "imgs/image_11.png"
  },
  {
    id: 5,
    url: "imgs/image_12.png"
  },
]

const sponsorCon = document.querySelector(".sponsor_sec .sponsor_con .sponsors");
console.log(sponsorCon);

sponsorLogo.forEach((item)=>{
  sponsorCon.innerHTML += `<div data-id="${item.id}" class="logo_div">
            <img src="${item.url}" alt="">
          </div>`
})


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [`
    <span class="move_btn">
      <span class="material-symbols-outlined">
        chevron_left
      </span>
    </span>`, 

    `<span class="move_btn">
      <span class="material-symbols-outlined"> 
        chevron_right 
      </span>
    </span>`],
    dots: false,
    items: 1,
  })
});

const sponsorLogoTwo = [
  {
    id: 1 ,
    url: "imgs/image14.png"
  },
  {
    id: 2 ,
    url: "imgs/image13.png"
  },
  {
    id: 3 ,
    url: "imgs/image15.png"
  },
  {
    id: 4 ,
    url: "imgs/image13.png"
  },
  {
    id: 5 ,
    url: "imgs/image16.png"
  },
]

const sponsorConTwo = document.querySelector("main .sponsor_sec-two .sponsor_con-two");

sponsorLogoTwo.forEach((item)=>{
  sponsorConTwo.innerHTML += `<div data-id="${item.id}" class="card">
            <div class="img_div">
              <img src="${item.url}" alt="logo">
            </div>
          </div>`
})

const info = [
  {
    id: 1,
    iconURL: "imgs/phoneIcon.png",
    info: "+92 300 1234567",
  },
  {
    id: 2,
    iconURL: "imgs/mailIcon.png",
    info: "info@nixxsol.com",
  },
  {
    id: 3,
    iconURL: "imgs/locationIcon.png",
    info: "Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar mattis a.",
  },
]

const infoCon = document.querySelector(".footer .footer_content_con .info_con")

info.forEach((item)=>{
  infoCon.innerHTML += `<div data-id="${item.id}" class="info">
            <div class="icon_div"><img src="${item.iconURL}" alt="icon"></div>
            <span class="info_span">${item.info}</span>
          </div>`
})

const portfolioSlide = [
  {
    id: 1,
    url: "imgs/Rectangle0.png"
  },
  {
    id: 1,
    url: "imgs/Rectangle.png"
  },
  {
    id: 1,
    url: "imgs/Rectangle2.jpg"
  },
]

const portCarusel = document.querySelector(".portfolio_con .owl-carousel.owl-theme.carusel")

portfolioSlide.forEach((item)=>{
  portCarusel.innerHTML += `<div data-id="${item.id}" class="item">
              <img src="${item.url}" alt="foto" />
            </div>`
})

const unDefinedElement = document.createElement("div");
unDefinedElement.innerText = "Keçid təyin edilməyib :(";
document.body.appendChild(unDefinedElement);
unDefinedElement.classList.add("unDefinedElement")

const unDefined = function() {
  unDefinedElement.classList.add("unDefinedElementShow")
  setTimeout(()=>unDefinedElement.classList.remove("unDefinedElementShow") , 3000)
}

const mobMenuOx = document.querySelector(".mob_menu_ox");
const mobileMenuFullscreen = document.querySelector(".mobile_menu_fullscreen");

const getMenu = function(){
  mobMenuOx.classList.toggle("close");
  mobileMenuFullscreen.classList.toggle("close");
}