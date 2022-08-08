const oneStar = document.querySelector(".one-star");
const twoStar = document.querySelector(".two-star");
const threeStar = document.querySelector(".three-star");
const fourStar = document.querySelector(".four-star");
const fiveStar = document.querySelector(".five-star");

oneStar.addEventListener("click", () => {
  oneStar.classList.add("gold-color");
  twoStar.classList.remove("gold-color");
  threeStar.classList.remove("gold-color");
  fourStar.classList.remove("gold-color");
  fiveStar.classList.remove("gold-color");
});

twoStar.addEventListener("click", () => {
  oneStar.classList.add("gold-color");
  twoStar.classList.add("gold-color");
  threeStar.classList.remove("gold-color");
  fourStar.classList.remove("gold-color");
  fiveStar.classList.remove("gold-color");
});

threeStar.addEventListener("click", () => {
  oneStar.classList.add("gold-color");
  twoStar.classList.add("gold-color");
  threeStar.classList.add("gold-color");
  fourStar.classList.remove("gold-color");
  fiveStar.classList.remove("gold-color");
});

fourStar.addEventListener("click", () => {
  oneStar.classList.add("gold-color");
  twoStar.classList.add("gold-color");
  threeStar.classList.add("gold-color");
  fourStar.classList.add("gold-color");
  fiveStar.classList.remove("gold-color");
});

fiveStar.addEventListener("click", () => {
  oneStar.classList.add("gold-color");
  twoStar.classList.add("gold-color");
  threeStar.classList.add("gold-color");
  fourStar.classList.add("gold-color");
  fiveStar.classList.add("gold-color");
});
