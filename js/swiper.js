let swiper;window.onload=()=>sliderUpdate();window.addEventListener("resize",()=>sliderUpdate());const sliderUpdate=()=>{if(window.innerWidth<=640){swiper=new Swiper(".mySwiper",{slidesPerView:1,slidesPerGroup:1,spaceBetween:30,loop:!0,loopFillGroupWithBlank:!0,navigation:{nextEl:"#swiper-button-next",prevEl:"#swiper-button-prev",},})}
if(window.innerWidth>640&&window.innerWidth<=1024){swiper=new Swiper(".mySwiper",{slidesPerView:2,spaceBetween:30,slidesPerGroup:2,loop:!0,loopFillGroupWithBlank:!0,navigation:{nextEl:"#swiper-button-next",prevEl:"#swiper-button-prev",},})}
if(window.innerWidth>1024){swiper=new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,navigation:{nextEl:"#swiper-button-next",prevEl:"#swiper-button-prev",},})}}