const burgerBtn = document.querySelector(".burger");
const navigationMenu = document.querySelector(".navigation__list");
const navigationLink = document.querySelectorAll(".navigation__link");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger__active");
  navigationMenu.classList.toggle("navigation_active");
  document.body.classList.toggle("lock");

  navigationLink.forEach((li) => {
    li.addEventListener("click", () => {
      navigationMenu.classList.remove("navigation_active");
      burgerBtn.classList.remove("burger__active");
      document.body.classList.remove("lock");
    });
  });
});

const slider = () => {
  const sliderItems = document.querySelectorAll(".lists__item");
  const sliderList = document.querySelector(".lists__container");
  const btnPrev = document.querySelector(".arrowleft");
  const btnNext = document.querySelector(".arrowright");

  console.log(sliderItems);

  let activeSlide = 0;
  let position = 0;

  const selectButton = () => {
    if (activeSlide + 1 === sliderItems.length) {
      btnNext.style.display = "none";
    } else {
      btnNext.style.display = "";
    }

    if (activeSlide === 0) {
      btnPrev.style.display = "none";
    } else {
      btnPrev.style.display = "";
    }
  };

  selectButton();

  const nextSlide = () => {
    sliderItems[activeSlide]?.classList.remove("active");
    position = -sliderItems[0].clientWidth * activeSlide;
    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide += 1;

    sliderItems[activeSlide]?.classList.add("active");
    selectButton();
  };

  const prevSlide = () => {
    sliderItems[activeSlide]?.classList.remove("active");

    sliderList.style.transform = `translateX(${position}px)`;
    activeSlide -= 1;

    sliderItems[activeSlide]?.classList.add("active");
    selectButton();
  };

  btnPrev.addEventListener("click", prevSlide);
  btnNext.addEventListener("click", nextSlide);
};

slider();
