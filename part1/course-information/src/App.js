const Header = (props) => {
  return <h1>{props.courseName}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.courseInfo.map((info) => (
        <Part
          key={info.title}
          title={info.title}
          exercises={info.exercises}
        ></Part>
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.exercises.reduce((acc, curr) => acc + curr);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const courseInfo = [
    { title: "Fundamentals of React", exercises: 10 },
    { title: "Using props to pass data", exercises: 7 },
    { title: "State of a component", exercises: 14 },
  ];

  const exercices = courseInfo.map((info) => info.exercises);

  return (
    <div>
      <Header courseName={course} />
      <Content courseInfo={courseInfo} />
      <Total exercises={exercices} />
    </div>
  );
};

export default App;
