import { useState } from "react";
import "./weather.css";

import drizzle from "../assests/drizzle.png"
import clear from "../assests/sun.png";
import cloud from "../assests/cloudy.png";
import search_icon from "../assests/search.png";
import humidity from "../assests/humidity.png"
import wind from "../assests/wind.png";
import rain from "../assests/heavy-rain.png";
import snow from "../assests/snowy.png";


const Weather = () => {

    const [weatherIcon,setWeatherIcon]=useState(cloud);

     const api_key="c19a0a336f1dc3a193feb7dde398c1bc";
    
    const search = async ()=>{
        const elemet = document.getElementsByClassName("weather-input");
        if(elemet[0].value==="")
        {
            return 0;
        } 
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${elemet[0].value}&units=Metric&appid=${api_key}`;
        const response =  await fetch(url);
        const data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percentage");
        const wind =  document.getElementsByClassName("wind-rate");
        const temperature =  document.getElementsByClassName("weather-temp");
        const location =  document.getElementsByClassName("weather-location");

        humidity[0].innerHTML =data.main.humidity+" %";
        wind[0].innerHTML=Math.floor(data.wind.speed)+" km/h";
        temperature[0].innerHTML=Math.floor(data.main.temp)+" c";
        location[0].innerHTML=data.name;

        if (data.weather[0].icon==="01d"||data.weather[0].icon==="01n")
        {
            setWeatherIcon(clear);
        }
        else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n")
        {
            setWeatherIcon(cloud);
        }
        else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n")
        {
            setWeatherIcon(drizzle);
        }
        else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n")
        {
            setWeatherIcon(drizzle);
        }
        else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n")
        {
            setWeatherIcon(rain);
        }
        else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n")
        {
            setWeatherIcon(rain);
        }
        else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n")
        {
            setWeatherIcon(snow);
        }
        else{
            setWeatherIcon(clear);
        }
    } 

    return ( 
        <div className="container">
            <div className="content">
                <input type="text" className="weather-input" placeholder="Search City"  />
                <div className="search-icon" onClick={search} >
                    <img  src={search_icon} width={100} alt=""/>
                </div>
            </div>
            <div className="weather-icon">
                <img src={cloud} width={140} alt=""/>
            </div>
            
            <div className="weather-temp">
                24 c
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} width={100} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">
                            64%
                        </div>
                        <div className="humidity-text">
                            Humidity
                        </div>  
                    </div>
                </div>
                <div className="element">
                    <img src={wind} width={100} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">
                           18 km/h
                        </div>
                        <div className="humidity-text">
                            Wind Speed
                        </div>  
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Weather;