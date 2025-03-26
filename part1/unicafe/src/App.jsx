import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100

  return (
    <>
      <h1>Statistics</h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {all}</p>
      <p>Average {average ? average : 0}</p>
      <p>Positive {positive ? positive : 0} </p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App
