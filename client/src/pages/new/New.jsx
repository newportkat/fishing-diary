import AirIcon from "@mui/icons-material/Air"
import ExploreIcon from "@mui/icons-material/Explore"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import NorthRoundedIcon from "@mui/icons-material/NorthRounded"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import axios from "axios"
import { Hemisphere, Moon } from "lunarphase-js"
import { nanoid } from "nanoid"
import React, { useState } from "react"
import Barometer from "../../images/barometer.svg"
import { defaultEntries } from "./defaultEntries"
import "./new.scss"

const New = () => {
  const [data, setData] = useState()
  const [diary, setDiary] = useState(false)

  const addEntry = () => {
    setDiary(false)
    setData()
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"))
    if (existingEntries == null) {
      existingEntries = []
      defaultEntries.map((entry) => existingEntries.push(entry))
    }

    const entry = {
      key: nanoid(),
      date: `${currentDate}`,
      time: `${currentTime}`,
      location: `${data.name}`,
      fish: data.fish ? `${data.fish}` : "0",
      description: `${capitalizeFirstLetter(data.weather[0].description)}`,
      temperature: `${data.main.temp.toFixed()}`,
      barometer: `${data.main.pressure.toFixed()}`,
      windSpeed: `${(data.wind.speed * 3.6).toFixed()}`,
      windDirecetion: `${calculateWindDirection(data.wind.deg)}`,
      phaseEmoji: `${phaseEmoji}`,
      moonPhase: `${phase}`,
    }

    existingEntries.push(entry)
    localStorage.setItem("allEntries", JSON.stringify(existingEntries))
  }

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const fetchData = async (url) => {
    const res = await axios.get(url)
    setData(res.data)
  }

  const getLocation = () => {
    setDiary((prev) => !prev)
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
      fetchData(url)
    })
  }

  const updateMinutes = (minutes) => {
    if (minutes < 10) {
      return (minutes = `0${minutes}`)
    } else {
      return minutes
    }
  }

  const updateDay = (day) => {
    if (day < 10) {
      return (day = `0${day}`)
    } else {
      return day
    }
  }
  const updateMonth = (month) => {
    if (month < 10) {
      return (month = `0${month}`)
    } else {
      return month
    }
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const calculateWindDirection = (degree) => {
    if (degree > 348.75 || degree <= 11.25) {
      return "N"
    } else if (degree > 11.25 && degree <= 33.75) {
      return "NNE"
    } else if (degree > 33.75 && degree <= 56.25) {
      return "NE"
    } else if (degree > 56.25 && degree <= 78.75) {
      return "ENE"
    } else if (degree > 78.75 && degree <= 101.25) {
      return "E"
    } else if (degree > 101.25 && degree <= 123.75) {
      return "ESE"
    } else if (degree > 123.75 && degree <= 146.25) {
      return "SE"
    } else if (degree > 146.25 && degree <= 168.75) {
      return "SSE"
    } else if (degree > 168.75 && degree <= 191.25) {
      return "S"
    } else if (degree > 191.25 && degree <= 213.75) {
      return "SSW"
    } else if (degree > 213.75 && degree <= 236.25) {
      return "SW"
    } else if (degree > 236.25 && degree <= 258.75) {
      return "WSW"
    } else if (degree > 258.75 && degree <= 281.25) {
      return "W"
    } else if (degree > 281.25 && degree <= 303.75) {
      return "WNW"
    } else if (degree > 303.75 && degree <= 326.25) {
      return "NW"
    } else {
      return "NNW"
    }
  }

  const date = new Date()
  const day = updateDay(date.getDate())
  const month = updateMonth(date.getMonth() + 1)
  const year = date.getFullYear()
  const currentDate = `${day}-${month}-${year}`
  const hours = date.getHours()
  const minutes = updateMinutes(date.getMinutes())
  const seconds = date.getSeconds()
  const currentTime = `${hours}:${minutes}`
  const phase = Moon.lunarPhase(date, Hemisphere.SOUTHERN)
  const phaseEmoji = Moon.lunarPhaseEmoji(date, Hemisphere.SOUTHERN)

  return (
    <div className="container">
      {!diary ? (
        <div className="getData">
          <h1>Record a diary entry?</h1>
          <button onClick={getLocation}>Load Data</button>
          <NorthRoundedIcon className="north" />
        </div>
      ) : !data ? (
        <div className="loader">
          <h1>Almost there!</h1>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="add">
          <div className="top">
            <div className="location">
              <LocationOnIcon className="pin" />
              <p>{data.name}</p>
            </div>
            <div className="date">
              <h3>{currentDate}</h3>
              <p>{currentTime}</p>
            </div>
          </div>
          <div className="catch">
            <h4>Fish caught?</h4>
            <input
              type="number"
              placeholder="0"
              min="0"
              className="input"
              onChange={handleChange}
              name="fish"
            />
          </div>
          <p className="description">
            {capitalizeFirstLetter(data.weather[0].description)}
          </p>
          <div className="details">
            <div className="info">
              <ThermostatIcon className="icon" />
              <p>{data.main.temp.toFixed()}°C</p>
            </div>
            <div className="info">
              <img src={Barometer} alt="barometer" />
              <p>{data.main.pressure.toFixed()}hPa</p>
            </div>
            <div className="info">
              <AirIcon className="icon" />
              <p>{(data.wind.speed * 3.6).toFixed()}km/h</p>
            </div>
            <div className="info">
              <ExploreIcon className="icon" />
              <p>{calculateWindDirection(data.wind.deg)}</p>
            </div>
            <div className="info">
              <span>{phaseEmoji}</span>
              <p>{phase}</p>
            </div>
          </div>
          <button onClick={addEntry}>Submit Entry</button>
        </div>
      )}
    </div>
  )
}

export default New
