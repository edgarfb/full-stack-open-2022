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
  return <Part name={props.info.name} exercises={props.info.exercises}></Part>;
};

const Total = (props) => {
  const total = props.exercises.reduce((acc, curr) => acc + curr);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const exercices = [part1.exercises, part2.exercises, part3.exercises];

  return (
    <div>
      <Header courseName={course} />
      <Content info={part1} />
      <Content info={part2} />
      <Content info={part3} />
      <Total exercises={exercices} />
    </div>
  );
};

export default App;
