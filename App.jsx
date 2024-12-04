const Header = () => {
  const course = "Half Stack application development";
  return <h1>{course}</h1>;
};

const Content = () => {
  const exercises = [
    { id: 1, part: "Fundamentals of React", exercise: 10 },
    { id: 2, part: "Using props to pass data", exercise: 7 },
    { id: 3, part: "State of a component", exercise: 14 },
  ];

  const listItems = exercises.map((exercise) => (
    <li key={exercise.id}>
      {exercise.part}: &nbsp; <b>{exercise.exercise}</b>
    </li>
  ));

  const totalExercises = exercises.reduce(
    (acc, current) => acc + current.exercise,
    0
  );
  console.log(totalExercises);
  return (
    <div>
      <ul>{listItems}</ul>
      <Total total={totalExercises} />
    </div>
  );
};

const Total = ({ total }) => {
  return <ul> Total exercises: {total}</ul>;
};

const App = () => {
  // const-definitions

  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default App;
