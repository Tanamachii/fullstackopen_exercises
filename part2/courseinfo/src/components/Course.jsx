import Header from './Header'
import Content from './Content'

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name}></Header>
      <Content parts={props.course.parts}></Content>
    </>
  )
}

export default Course
