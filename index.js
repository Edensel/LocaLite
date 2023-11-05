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

  function showCountry(data) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = `
      <div class="country">
        <div class="country-img">
          <img src="${data.flag}" alt="">
        </div>
        <div class="country-info">
          <h5 class="countryName">${data.name}</h5>
          <p><strong>Population:</strong> ${data.population}</p>
          <p class="regionName"><strong>Region:</strong> ${data.region}</p>
          <p><strong>Capital:</strong> ${data.capital}</p>
        </div>
      </div>`;
    countriesElement.appendChild(country);
    country.addEventListener("click", () => {
      showCountryDetail(data);
    });
  }

  dropDown.addEventListener("click", () => {
    dropDownElement.classList.toggle("showDropDown");
  });

  
    
});
