document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuLink = document.querySelector(".mobileMenu a");
  const mobileBar = document.querySelector(".mobileBar");

  if (mobileMenuLink && mobileBar) {
    mobileMenuLink.addEventListener("click", function (e) {
      e.preventDefault(); 
      const maxHeight = window.getComputedStyle(mobileBar).maxHeight;

      if (maxHeight === "0px" || maxHeight === "none") {
        mobileBar.style.maxHeight = "500px"; 
        mobileBar.style.display = "block";  
      } else {
        mobileBar.style.maxHeight = "0";
        setTimeout(() => {
          mobileBar.style.display = "none"; 
        }, 300); 
      }
    });
  }
});



  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    freeMode: true,
    loopslide:true,
    loopedSlides: 4,
    loopFillGroupWithBlank: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    breakpoints: {
      1024: {
          slidesPerView: 3, 
      },
      768: {
          slidesPerView: 2, 
      },
      425: {
          slidesPerView: 1, 
      },
      325: {
          slidesPerView: 1, 
      }
  }
  });
    
  var swiper = new Swiper(".testiSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
   autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
  






