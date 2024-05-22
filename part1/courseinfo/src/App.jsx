const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => <h1>{course}</h1>
  const Content = ({ parts }) => {
    const Part = ({ part, excercises }) => <p>{part} {excercises}</p>
    
    return (
      <>
        <Part part={parts[0].name} excercises={parts[0].exercises}></Part>
        <Part part={parts[1].name} excercises={parts[1].exercises}></Part>
        <Part part={parts[2].name} excercises={parts[2].exercises}></Part>
      </>
    );
  }
    

  const Total = ({parts}) => <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App