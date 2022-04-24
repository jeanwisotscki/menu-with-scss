import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events = ["click", "touchstart"]) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.nav = document.querySelector("#nav");
    this.events = events;
    this.activeClass = "active";

    // bind do this no evento de callback
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();

    this.menuList.classList.add(this.activeClass);
    this.menuBtn.classList.add(this.activeClass);
    this.nav.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.classList.remove(this.activeClass);
      this.nav.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    if (this.menuBtn) {
      this.events.forEach((evento) =>
        this.menuBtn.addEventListener(evento, this.openMenu)
      );
    }
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}

// export default class MenuMobile {
//   constructor() {
//     this.btnMobile = document.getElementById("btn-mobile");
//   }

//   toggleMenu(event) {
//     // evita o double click do touchstart
//     if (event.type === "touchstart") event.preventDefault();

//     const nav = document.getElementById("nav");
//     nav.classList.toggle("active");
//     const active = nav.classList.contains("active");
//     event.currentTarget.setAttribute("aria-expanded", active);
//     if (active) {
//       event.currentTarget.setAttribute("aria-label", "Fechar menu");
//     } else {
//       event.currentTarget.setAttribute("aria-label", "Abrir menu");
//     }
//   }

//   init() {
//     this.btnMobile.addEventListener("click", this.toggleMenu);
//     this.btnMobile.addEventListener("touchstart", this.toggleMenu);

//     return this;
//   }
// }
