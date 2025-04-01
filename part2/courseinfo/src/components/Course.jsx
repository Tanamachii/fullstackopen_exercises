import Header from './Header'
import Content from './Content'

const Course = (props) => {
  return (
    <>
      {props.course.map((course) => (
        <div key={course.id}>
          <Header name={course.name}></Header>
          <Content parts={course.parts}></Content>
        </div>
      ))}
    </>
  )
}

export default Course
