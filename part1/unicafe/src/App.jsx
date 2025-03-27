import { useState } from 'react'
const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all) * 100

  return (
    <>
      <h1>Statistics</h1>
      {all ? (
        <>
          <StatisticLine text='Good' value={props.good}></StatisticLine>
          <StatisticLine text='Neutral' value={props.neutral}></StatisticLine>
          <StatisticLine text='Bad' value={props.bad}></StatisticLine>
          <StatisticLine text='All' value={all}></StatisticLine>
          <StatisticLine
            text='Average'
            value={average ? average : 0}
          ></StatisticLine>
          <StatisticLine
            text='Positive'
            value={positive ? positive : 0}
          ></StatisticLine>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  )
}
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <Button
        text='Good'
        handleClick={() => {
          setGood(good + 1)
        }}
      ></Button>
      <Button
        text='Neutral'
        handleClick={() => {
          setNeutral(neutral + 1)
        }}
      ></Button>
      <Button
        text='Bad'
        handleClick={() => {
          setBad(bad + 1)
        }}
      ></Button>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  )
}

export default App
