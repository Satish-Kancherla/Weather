import { useState,useEffect } from "react";
// import drizzle from "./assests/drizzle.png"
// import clear from "./assests/sun.png";
import cloud from "./assests/cloudy.png";
import humidity from "./assests/humidity4.png"
import wind from "./assests/wind3.png";
// import rain from "./assests/heavy-rain.png";
// import snow from "./assests/snowy.png";
// import search_icon from "./assests/search.png";

const Weatherapp = () => {

    const[apiData,setApiData]=useState()
    const [search,setSearch]=useState("")

    // const wind_speed = apiData.main.humidity;
    

    const api_key="c19a0a336f1dc3a193feb7dde398c1bc";
    useEffect(()=>{
        const fetchData = async ()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${api_key}`;
            const res =  await fetch(url);
            const data = await res.json()
            console.log(data);
            if(res.status!==400){
                setApiData(data)
            }
        }
        fetchData();
    },[search])
    
    return (

        <div className="container">
            <div className="content">
                <input type="text" name ="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} value={search} />
            </div>
            
            <div className="weather-icon">
                <img src= {"http://openweathermap.org/img/w/" + apiData?.weather[0]?.icon + ".png"} width={80} alt=""/>
                <h1>{apiData?.weather?.main}</h1>
            </div>

            <div className="weather-temp">
                {Math.round(apiData?.main?.temp) } °c
            </div>
            <div className="weather-location">
              {/*  Hyderabad  {apiData.name} */}{apiData?.name}
            </div>        
            <div className="data-container">
                <div className="element">
                    <img src={humidity} width={100} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">
                            {Math.round(apiData?.main?.humidity)} % 
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
                          {Math.round(apiData?.wind?.speed)} km/h 
                        </div>
                        <div className="humidity-text">
                            Wind Speed
                        </div>  
                    </div>
                </div>
            </div>           
             
        </div>
    )
}
export default Weatherapp;

