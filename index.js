document.addEventListener("DOMContentLoaded", () => {
  const countriesElement = document.querySelector(".countries");
  const dropDown = document.querySelector(".drop-down");
  const dropDownElement = document.querySelector(".drop");
  const region = document.querySelectorAll(".region");
  const search = document.querySelector(".search");
  const countryPage = document.querySelector(".countryPage");

  async function getCountry() {
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    res.forEach((element) => {
      showCountry(element);
    });
  }
  getCountry();
    
});
