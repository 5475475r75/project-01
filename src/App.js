import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demp';

function App() {

  const person = [
    {
      name: "Amit",
      age: 25,
      course: [
        "C",
        "HTML"
      ]
    },
    {
      name: "Ajay",
      age: 40,
      course: [
        "Java",
        "JavaScript"
      ]
    }
  ]

  person.map((p) => {
    console.log(person.name, person.age);
    person.course.map((p) => console.log(p));
  })


  return (
    < Demo />
  );
}

export default App;
