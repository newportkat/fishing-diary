import React from "react"
import { Link } from "react-router-dom"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>FISHING DIARY</h1>
      </div>

      <div className="step">
        <div className="number-case">
          <h2 className="number">1</h2>
        </div>
        <p>
          To get started, click on the&nbsp;
          <Link className="link" to="/new">
            New Entry
          </Link>
          &nbsp;page to log a session.
        </p>
      </div>
      <div className="step">
        <div className="number-case">
          <h2 className="number">2</h2>
        </div>
        <p>
          Simply click log session and we'll record all the relevant data for
          your fishing trip, including weather, location, time, and date.
        </p>
      </div>

      <div className="step">
        <div className="number-case">
          <h2 className="number">3</h2>
        </div>
        <p>
          Want to see all of your submitted entries in one place? Head on over
          to the&nbsp;
          <Link className="link" to="/diary">
            Diary
          </Link>
          &nbsp;page to view a complete record of your fishing sessions.
        </p>
      </div>
      <div className="step">
        <div className="number-case">
          <h2 className="number">4</h2>
        </div>
        <p>Now go catch some data, as well as some fish.</p>
      </div>
    </div>
  )
}

export default Home
