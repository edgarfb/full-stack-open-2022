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

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default Courses;
