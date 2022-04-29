const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>Number of exercises {total}</p>;
};

const Course = ({ course }) => {
  const { name, parts } = course;
  return (
    <div>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
      {
        name: "Single source of truth",
        exercises: 12,
      },
      {
        name: "State management patterns",
        exercises: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
