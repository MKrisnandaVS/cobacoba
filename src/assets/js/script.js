// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel-one").owlCarousel({
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  });

  $(document).ready(function () {
    $(".owl-carousel-two").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  });
});

// Toggle the opening of the submenu in the dropdown menu
const submenu_link = document.querySelector(".submenu-link");
const submenu = document.querySelector(".submenu");
submenu_link.addEventListener("click", () => {
  if (submenu.classList.contains("active-submenu")) {
    submenu.classList.remove("active-submenu");
    submenu.classList.add("inactive-submenu");
  } else {
    submenu.classList.remove("inactive-submenu");
    submenu.classList.add("active-submenu");
  }
});

// Change the pages submenu to be active or not based on the mouse over in the element
const pages = document.querySelector("#pages");
const pages_list = document.querySelector("#pages-list");
pages.addEventListener("mouseover", () => {
  pages_list.classList.remove("pages-submenu-inactive");
});

pages.addEventListener("mouseout", () => {
  pages_list.classList.add("pages-submenu-inactive");
});

// When the vertical scroll reach 100px the header fix in the top of the web page
const main = document.querySelector("main");
const header = document.querySelector("#header");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY >= 10) {
      header.classList.remove("relative");
      header.classList.add("fixed");
      header.classList.remove("h-[100px]d");
      header.classList.remove("md:h-[110px]");
      header.classList.add("h-20");
      main.classList.add("pt-[100px]");
      nav.classList.add("mt-4");
    } else {
      header.classList.add("relative");
      header.classList.remove("fixed");
      header.classList.add("h-[100px]d");
      header.classList.add("md:h-[110px]");
      header.classList.remove("h-20");
      main.classList.remove("pt-[100px]");
      nav.classList.remove("mt-4");
    }
  },
  { passive: true }
);

// Toggle the opening of the dropdown menu and the menu icon
const menu_icon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
menu_icon.addEventListener("click", () => {
  menu_icon.childNodes[1].getAttribute("d") == "M4 6h36M4 12h8m-8 6h36"
    ? menu_icon.childNodes[1].setAttribute("d", "M6 18L18 6M6 6l12 12")
    : menu_icon.childNodes[1].setAttribute("d", "M4 6h36M4 12h8m-8 6h36");

  if (nav.classList.contains("active-menu")) {
    nav.classList.remove("active-menu");
    nav.classList.add("inactive-menu");
    nav.removeAttribute('aria-label', 'dropdown')
  } else {
    nav.classList.remove("inactive-menu");
    nav.classList.add("active-menu");
    nav.setAttribute('aria-label', 'dropdown')
  }
});

// When a nav link is clicked, the nav is closed with the animation
const dropwdown_nav_li = document.querySelectorAll('.nav ul li a[href^="#"]');
dropwdown_nav_li.forEach((li) => {
  li.addEventListener("click", () => {
    nav.classList.remove("active-menu");
    nav.classList.add("inactive-menu");

    menu_icon.childNodes[1].setAttribute("d", "M4 6h16M4 12h8m-8 6h16");
  });
});

// Toggle the courses link and the current course displayed
const courses_link = document.querySelectorAll(".courses-link");
const course = document.querySelector(".course");

const courses = {
  1: {
    price: "$128",
    image: "assets/images/courses-01.jpg",
    title: "Web Development",
    firts_info:
      "Did you know that you can visit TooCSS website for latest listing of HTML templates and a variety of useful templates.",
    second_info:
      "You just need to go and visit that website right now. IF you have any suggestion or comment about this template, you can feel free to go to contact page for our email address.",
    hours: "36 Hours",
    weeks: "4 Weeks",
    certificates: "3 Certificates",
  },
  2: {
    price: "$156",
    image: "assets/images/courses-02.jpg",
    title: "Creative Graphic Design",
    firts_info:
      "You are not allowed to redistribute this template ZIP file on any other website without a permission from us.",
    second_info:
      "There are some unethical people on this world copied and reposted our templates without any permission from us. Their Karma will hit them really hard. Yeah!",
    hours: "48 Hours",
    weeks: "6 Weeks",
    certificates: "1 Certificate",
  },
  3: {
    price: "$184",
    image: "assets/images/courses-03.jpg",
    title: "Web Design",
    firts_info:
      "Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.",
    second_info:
      "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.",
    hours: "28 Hours",
    weeks: "4 Weeks",
    certificates: "1 Certificate",
  },
  4: {
    price: "$76",
    image: "assets/images/courses-04.jpg",
    title: "WordPress Introduction",
    firts_info:
      "Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.",
    second_info:
      "Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.",
    hours: "48 Hours",
    weeks: "4 Weeks",
    certificates: "2 Certificates",
  },
};

for (let i = 0; i <= 3; i++) {
  courses_link[i].addEventListener("click", () => {
    if (!courses_link[i].classList.contains("course-link-active")) {
      for (var n = 0; n <= 3; n++) {
        courses_link[n].classList.remove("course-link-active");
      }

      courses_link[i].classList.add("course-link-active");

      course.classList.add("translate-x-10");
      course.classList.add("opacity-0");

      setTimeout(() => {
        course.classList.remove("translate-x-10");
        course.classList.remove("opacity-0");

        course.childNodes[1].childNodes[1].textContent = `${
          courses[i + 1].price
        }`;
        course.childNodes[1].childNodes[3].src = `${courses[i + 1].image}`;
        course.childNodes[3].childNodes[1].textContent = `${
          courses[i + 1].title
        }`;
        course.childNodes[3].childNodes[1].textContent = `${
          courses[i + 1].title
        }`;
        course.childNodes[3].childNodes[3].textContent = `${
          courses[i + 1].firts_info
        }`;
        course.childNodes[3].childNodes[5].textContent = `${
          courses[i + 1].second_info
        }`;
        course.childNodes[3].childNodes[7].childNodes[1].textContent = `${
          courses[i + 1].hours
        }`;
        course.childNodes[3].childNodes[7].childNodes[3].textContent = `${
          courses[i + 1].weeks
        }`;
        course.childNodes[3].childNodes[7].childNodes[5].textContent = `${
          courses[i + 1].certificates
        }`;
      }, 300);
    }
  });
}
