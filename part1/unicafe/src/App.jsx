import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <>
      <h1>Give feedback</h1>
      <button
        onClick={() => {
          setGood(good + 1)
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral(neutral + 1)
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad(bad + 1)
        }}
      >
        Bad
      </button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {average ? average : 0}</p>
      <p>Positive {positive ? positive : 0} </p>
    </>
  )
}

export default App
