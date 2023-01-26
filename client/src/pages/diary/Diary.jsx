import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import React, { useState } from "react"
import "./diary.scss"

const Diary = () => {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("allEntries"))
  )

  console.log(entries)

  const deleteEntry = (key) => {
    if (entries.length === 1) {
      setEntries(null)
    } else {
      setEntries(entries.filter((item) => item.key !== key))
    }
  }

  return (
    <div className="diaryContainer">
      {entries ? (
        entries.map((entry) => {
          return (
            <div className="entry" key={entry.key}>
              {entry.isExample && <div className="example">EXAMPLE ENTRY</div>}
              <div className="header">
                <h2>{entry.date}</h2>
                <CloseRoundedIcon
                  className="delete"
                  onClick={() => deleteEntry(entry.key)}
                />
              </div>
              <div className="data">
                <div className="field">
                  <h5 className="label">Location: </h5>
                  <p>{entry.location}</p>
                </div>

                <div className="field">
                  <h5 className="label">Time: </h5>
                  <p>{entry.time}</p>
                </div>

                <div className="field">
                  <h5 className="label">Fish caught: </h5>
                  <p>{entry.fish}</p>
                </div>

                <div className="field">
                  <h5 className="label">Weather: </h5>
                  <p>{entry.description}</p>
                </div>

                <div className="field">
                  <h5 className="label">Temperature: </h5>
                  <p>{entry.temperature}°C</p>
                </div>

                <div className="field">
                  <h5 className="label">Barometer: </h5>
                  <p>{entry.barometer}hPa</p>
                </div>

                <div className="field">
                  <h5 className="label">Wind: </h5>
                  <p>
                    {entry.windDirection} {entry.windSpeed}km/h
                  </p>
                </div>

                <div className="field">
                  <h5 className="label">Lunar phase: </h5>
                  <p>
                    {entry.moonPhase} {entry.phaseEmoji}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <h1 className="empty">No entries... time to go fishing!</h1>
      )}
    </div>
  )
}

export default Diary
