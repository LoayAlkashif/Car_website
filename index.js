
let menuBtn = document.querySelector("#MenuBtn");
let navBar = document.querySelector(".navbar");
// for header

 // theme toggle 
 let ThemeToggle = document.querySelector(".themeToggle");
 let ToggleBtn = document.querySelector(".ToggleBtn");
 

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    ThemeToggle.classList.remove("active");
     
}


// to  open the login form 
document.querySelector("#LoginBtn").onclick = ()=> {
     document.querySelector(".LoginFormContainer").classList.toggle("active");
};

// to close the login form 
document.querySelector("#CloseLoginForm").onclick = ()=> {
    document.querySelector(".LoginFormContainer").classList.remove ("active");
};



// for the movemnebt of img in header 
// when mouse enter/move
document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".HomeParallex").forEach((elm) => {
        let speed = elm.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed)/60;
        let y = (window.innerHeight - e.pageY * speed)/60;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
    })
};

// when mouse leave 

document.querySelector(".home").onmouseleave = (e) => {
    document.querySelectorAll(".HomeParallex").forEach((elm) => {
        elm.style.transform = `translateX(0px) translateY(0px)`;
    })
}

// where window scroll login button
window.onscroll = () =>{
    document.querySelector(".LoginFormContainer").classList.remove("active");
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
    ThemeToggle.classList.remove("active");
};

var swiper = new Swiper(".VehiclesSlider", {
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween:20,
    autoplay:{
        dekay: 1000,
        disableOnInteraction: false,
  },
  pagination:{
    el: ".swiperPagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView:1,
    },
    768: {
        slidesPerView:2,
    },
    1024: {
        slidesPerView:3,
    },
  },
});

// for feature slider
var swiper = new Swiper(".featureSlider", {  
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween:20,
    autoplay:{
        dekay: 1000,
        disableOnInteraction: false,
  },
  pagination:{
    el: ".swiperPagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView:1,
    },
    768: {
        slidesPerView:2,
    },
    1024: {
        slidesPerView:3,
    },
  },
});

//slider for  review

var swiper = new Swiper(".ReviewSlider", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //This is For Responsive
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  menuBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});
