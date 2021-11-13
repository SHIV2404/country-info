import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./Countries.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();
function Countries() {
  const url = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <div className="container">
      <div className="nav-bar">
        <p className="heading">Where in the world?</p>
        <Link to="/" className="logout">
          <p className="logout">logout</p>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search Capital here"
        className="search-bar"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <section className="country-box">
        {countries
          .map((country) => {
            const { area, population, region, capital, common } = country;

            return (
              <article key={area}>
                <div className="country-container" data-aos="flip-up" data-aos-duration="1500">
                  <a href="https://razorpay.com/" className="razor-pay">
                    <img src="https://flagcdn.com/w320/cu.png" alt={area} className="flags" />
                  </a>
                  <h3>{common}</h3>
                  <h4 className="heads">
                    Capital: <span className="fonts">{capital}</span>
                  </h4>
                  <h4 className="heads">
                    population: <span className="fonts">{population}</span>
                  </h4>

                  <h4 className="heads">
                    region: <span className="fonts">{region}</span>
                  </h4>
                </div>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default Countries;
