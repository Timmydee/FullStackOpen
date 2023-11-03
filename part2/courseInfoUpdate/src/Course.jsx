/* eslint-disable react/prop-types */

const Course = ({ course }) => {
  const totalExercise = course[0].parts.reduce(
    (total, parts) => total + parts.exercises,
    0
  );

  const totalExercise1 = course[1].parts.reduce(
    (total, parts) => total + parts.exercises,
    0
  );
  return (
    <div>
      <h1>Web development curriculum</h1>

      <h3>{course[0].name}</h3>
      <p>
        {course[0].parts[0].name} {course[0].parts[1].exercises}
      </p>
      <p>
        {course[0].parts[1].name} {course[0].parts[1].exercises}
      </p>
      <p>
        {course[0].parts[2].name} {course[0].parts[2].exercises}
      </p>
      <p>
        {course[0].parts[3].name} {course[0].parts[3].exercises}
      </p>
      <h4>Total of {totalExercise} exercises</h4>

      <div>
        <h3>{course[1].name}</h3>
        <p>
          {course[1].parts[0].name} {course[1].parts[1].exercises}
        </p>
        <p>
          {course[1].parts[1].name} {course[1].parts[1].exercises}
        </p>

        <h4>Total No of {totalExercise1} exercises</h4>
      </div>
    </div>
  );
};

export default Course;
