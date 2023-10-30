/* eslint-disable react/prop-types */

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

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[1].exercises}
      </p>
      <p>
      {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
      {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>Number of exercises  {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

//1.1
// const Header = ({ course }) => {
//   return <h1>{course}</h1>;
// };

// const Content = ({
//   part1,
//   exercises1,
//   part2,
//   exercises2,
//   part3,
//   exercises3,
// }) => {
//   return (
//     <div>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//     </div>
//   );
// };

// const Total = ({ exercises1, exercises2, exercises3 }) => {
//   return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
// };

// const App = () => {
//   // const-definitions

//   return (
//     <div>
//       <Header course="Half Stack application development" />
//       <Content
//         part1="Fundamentals of React"
//         exercises1="10"
//         part2="Using props to pass data"
//         exercises2="7"
//         part3="State of a component"
//         exercises3="14"
//       />
//       <Total exercises1="10" exercises2="7" exercises3="14" />
//     </div>
//   );
// };

export default App;
