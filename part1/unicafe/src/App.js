import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />

          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />

          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={(good - bad) / all} />
          <StatisticLine text="positive" value={(100 * good) / all} />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      {good > 0 || neutral > 0 || bad > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
