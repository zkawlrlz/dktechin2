
// navigation
const btnYellow = document.querySelector(".btn_yellow");
const docGnb = document.querySelector(".doc-gnb");
const sectionMain = document.querySelector(".section-main");
const yellowArrow = document.querySelector(".btn_yellow .arrow_prev");
const docHeader = document.querySelector(".doc-header");
const mobBurgerBtn = document.querySelector(".doc-header .nav-burger-btn");
const mobCloseBtn = document.querySelector(".mob-close");

btnYellow.addEventListener("click", function() {
    if (btnYellow.classList.contains("disabled")) {
        btnYellow.classList.remove("disabled");
        docGnb.style.transform = "";
        sectionMain.style.transform = "";
        yellowArrow.style.transform = "";
    } else {
        btnYellow.classList.add("disabled");
        docGnb.style.transform = "translateX(-240px)";
        sectionMain.style.transform = "translateX(-240px)";
        yellowArrow.style.transform = "scaleX(-1)";
    }
});
mobBurgerBtn.addEventListener("click", function() {
    if (mobBurgerBtn.classList.contains("active")) {
        mobBurgerBtn.classList.remove("active");
        docGnb.style.display = "none";
    } else {
        mobBurgerBtn.classList.add("active");
        docGnb.style.display = "block";
        if (mobCloseBtn.addEventListener("click", function() {
            docGnb.style.display = "none";
        }));
    };
});


// section-tab
const tabStory = document.querySelector(".tab_story");
const tabBlog = document.querySelector(".tab_blog")
const contentBlog = document.querySelectorAll(".content-blog")
const conStory = document.querySelectorAll(".story");

tabStory.addEventListener("click", function() {
    if (!tabStory.classList.contains("active")) {
        tabStory.classList.add("active");
        tabBlog.classList.remove("active");
        contentBlog.forEach(function(content) {
            content.style.display = "none";
        });
        conStory.forEach(function(storyBlock) {
            storyBlock.style.display = "block";
        })
    }
});
tabBlog.addEventListener("click", function() {
    if (!tabBlog.classList.contains("active")) {
        tabBlog.classList.add("active");
        tabStory.classList.remove("active");
        contentBlog.forEach(function(content) {
            content.style.display = "block";
        });
        conStory.forEach(function(storyBlock) {
            storyBlock.style.display = "none";
        })
    } 
});


// mob_swiper
function initializeSwiper() {
    if (window.innerWidth <= 767.98) {
        new Swiper(".travel_blog .swiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: '1',

            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        });
        new Swiper(".visitors .swiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: '1',
            centeredSlides: true,
        
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        });
        new Swiper(".section-suggestion .swiper-container", {
            direction: "horizontal",
            loop: true,
            slidesPerView: '1',
            spaceBetween: 20,
            centeredSlides: true,
            pagination: {
                el: '.section-suggestion .swiper-pagination',
                clickable: true,
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        });
    }
    else {
        new Swiper(".travel_blog .swiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: '5',
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        });
        
        new Swiper(".visitors .swiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: '2',
            
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        });
        
        new Swiper(".section-suggestion .swiper-container", {
            direction: "horizontal",
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: true,
        
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
        });
    }
}

initializeSwiper();

window.addEventListener("resize", initializeSwiper);

window.addEventListener("load", initializeSwiper);


