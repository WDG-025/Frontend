import Student from "./components/Student";

import students from "./data/studends";

// students = [{}, {}, {}]

function App() {
  return (
    <div className="container">
      {students.map((student) => (
        <Student key={student.id} person={student} />
      ))}
    </div>
  );
}

export default App;
