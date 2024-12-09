import React from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercises: 10,
      },
      { id: 2, name: "Using props to pass data", exercises: 7 },
      { id: 3, name: "State of a component", exercises: 14 },
    ],
  };

  const totalExercises = course.parts.reduce(
    (acc, current) => acc + current.exercises,
    0
  );

  return (
    <div>
      <ul>
        <h1>{course.name}</h1>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name}: &nbsp; {part.exercises}
          </li>
        ))}
      </ul>
      <Total total={totalExercises} />
    </div>
  );
};

const Total = ({ total }) => {
  return <ul> Total exercises: {total}</ul>;
};

export default App;
