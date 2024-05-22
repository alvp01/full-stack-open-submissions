import { useState } from 'react'

const StatisticLine = ({ text, value, isPercentage = false }) => {
  if (isPercentage) return <p>{text} {value}%</p>

  return <p>{text} {value}</p>
}

const Statistics = ({ good, neutral, bad }) => {

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={good + bad + neutral} />
        </tr>
        <tr>
          <StatisticLine text="average" value={(good - bad) / (good + bad + neutral)} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={good / (good + bad + neutral) * 100} isPercentage />
        </tr>
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App