const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <strong>
          Total of {props.parts.reduce((sum, part) => sum + part.exercises, 0)}{' '}
          exercises
        </strong>
      </p>
    </>
  )
}

export default Content
