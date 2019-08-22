import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function Teams() {

  const [lionsScore, updateLionsScore] = useState(0);
  const [tigersScore, updateTigersScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          <button onClick={() => updateLionsScore(lionsScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => updateLionsScore(lionsScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => updateTigersScore(tigersScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => updateTigersScore(tigersScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default Teams;