const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      {props.partsAndExersices.map((e) => (
        <Part part={e.part} exercises={e.exercises} />
      ))}
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const partsAndExersices = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content partsAndExersices={partsAndExersices} />
      <Total
        total={partsAndExersices.reduce((acc, e) => acc + e.exercises, 0)}
      />
    </div>
  )
}

export default App
