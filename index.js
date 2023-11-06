document.addEventListener("DOMContentLoaded", () => {
  // Selecting relevant HTML elements
  const countriesElement = document.querySelector(".countries");
  const dropDown = document.querySelector(".drop-down");
  const dropDownElement = document.querySelector(".drop");
  const region = document.querySelectorAll(".region");
  const search = document.querySelector(".search");
  const countryPage = document.querySelector(".countryPage");
//   const couunty = document.querySelector(".county");

  // Fetch and display country data
  async function getCountry() {
      const url = await fetch("https://restcountries.com/v2/all");
      const res = await url.json();
      res.forEach((element) => {
          showCountry(element);
      });
  }
  getCountry();

  // Display individual country cards
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

  // Toggle region filter dropdown
  dropDown.addEventListener("click", () => {
      dropDownElement.classList.toggle("showDropDown");
  });

  // Filter countries by region
  region.forEach((element) => {
      element.addEventListener("click", () => {
          const selectedRegion = element.textContent.toLowerCase();
          const countryCards = document.querySelectorAll(".country");
          countryCards.forEach((card) => {
              const cardRegion = card.querySelector(".regionName").textContent.toLowerCase();
              if (selectedRegion === "all" || cardRegion.includes(selectedRegion)) {
                  card.style.display = "grid";
              } else {
                  card.style.display = "none";
              }
          });
      });
  });

  // Search for countries by name
  search.addEventListener("input", () => {
      const searchValue = search.value.toLowerCase();
      const countryCards = document.querySelectorAll(".country");
      countryCards.forEach((card) => {
          const cardName = card.querySelector(".countryName").textContent.toLowerCase();
          if (cardName.includes(searchValue)) {
              card.style.display = "grid";
          } else {
              card.style.display = "none";
          }
      });
  });

  // Display detailed country information
  function showCountryDetail(data) {
      countryPage.classList.toggle("show");
      countryPage.innerHTML = `
          <div class="pcountry">
              <div class="leftpage">
                  <img src="${data.flag}" alt="">
              </div>
              <div class="rightpage">
                  <h1>${data.name}</h1>
                  <div class="countryinfo">
                      <div class="leftDetails details">
                          <p><strong>Native Name:</strong> ${data.nativeName}</p>
                          <p><strong>Population:</strong> ${data.population}</p>
                          <p><strong>Region:</strong> ${data.region}</p>
                          <p><strong>Sub Region:</strong> ${data.subregion}</p>
                          <p><strong>Capital:</strong> ${data.capital}</p>
                      </div>
                      <div class="rightDetails details">
                          <p><strong>Top Level Domain:</strong> ${data.topLevelDomain}</p>
                          <p><strong>Currencies:</strong> ${data.currencies[0].name} (${data.currencies[0].code})</p>
                          <p><strong>Languages:</strong> ${data.languages.map(lang => lang.name).join(', ')}</p>
                      </div>
                  </div>
              </div>
          </div>`;
  }
});
