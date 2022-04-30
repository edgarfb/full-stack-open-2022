const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Part = (course) => {
  const { name, exercises } = course;
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <p>
      {" "}
      <strong> Number of exercises {total}</strong>
    </p>
  );
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
        name: "Redux",
        exercises: 11,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
