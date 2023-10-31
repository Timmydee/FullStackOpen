/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <StatisticLine text="good" value={props.goodCount} />
      <StatisticLine text="neutral" value={props.neutralCount} />
      <StatisticLine text="bad" value={props.badCount} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.positive} />
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const alls = good + neutral + bad

  const onGood = () => {
    setGood((prev) => prev + 1);
  };

  const onNeutral = () => {
    setNeutral((prev) => prev + 1);
  };

  const onBad = () => {
    setBad((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <button onClick={onGood}>good</button>
        <button onClick={onNeutral}> neutral</button>
        <button onClick={onBad}>bad</button>
      </div>

      <h2>Statistics</h2>
      {alls == 0 ? (
        <div>No feedback given </div>
      ) : (
        <div>
          <Statistics
            goodCount={good}
            badCount={bad}
            neutralCount={neutral}
            all={good + bad + neutral}
            average={(good + bad + neutral) / 3}
            positive={(good / (good + bad + neutral)) * 100}
          />
        </div>
      )}
    </div>
  );
};

export default App;
