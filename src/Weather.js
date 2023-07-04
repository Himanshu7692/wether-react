import React,{useEffect, useState} from "react";
import "./App.css"

const Weather = () => {
    const [city,setCity] = useState(null); 
    const[search,setSearch] = useState("Gurgaon ");
    useEffect(()=>{
        const fetchApi = async()=> {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f9a09330232cf3ebda08935fcbb55d53&units=metric`
            const response = await fetch(url);
            const resJson = await response.json()
            setCity( resJson.main)
        }
        fetchApi();
    },[search])
    
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputfeild"
                        onChange={(e) => { setSearch(e.target.value)
                        }} />
                </div>
                {
                    !city ? (
                        <p className="para">No data found</p>
                    ):(
                        <div>
                        <div className="info">
                <h2 className="location">
                    {search}
                </h2>
                <h1 className="temp">
                    {city.temp}°C
                </h1>
                <h3 className="tempmin_max">Min : 5.25°Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
                    )}
            
            </div>
        </>
    )
}

export default Weather