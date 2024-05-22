const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    },
  ]

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
    

  const Total = ({total}) => <p>Number of exercises {total}</p>

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App