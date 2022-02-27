import React, { useState, useEffect } from "react";
import "../stylesheet/weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [country, setCountry] = useState("");

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY || "";
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(URL);
      const resData = await res.json();
      setCity(resData.main);
      setCountry(resData.sys.country);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="body">
        <div className="maindiv">
          <div className="firstdiv">
            <input
              type="text"
              className="input"
              placeholder="Search city..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          {!city ? (
            <p className="error">No Data found</p>
          ) : (
            <div className="seconddiv">
              <div className="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  fill="currentColor"
                  className="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
              </div>
              <h2>
                {search}, {country}
              </h2>
              <h3>{city.temp.toFixed(0)}°C</h3>
              <p>
                Min {city.temp_min} °C | Max {city.temp_max} °C
              </p>
              <p>Pressure {city.pressure} hPa</p>
              <p>Humidity {city.humidity} %</p>
            </div>
          )}
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
    </>
  );
};

export default Weather;
