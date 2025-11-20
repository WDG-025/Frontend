import Student from "./components/Student";

const studentData = {
  id: 1,
  firstName: "Ruby",
  lastName: "McTest",
  age: 43,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
  gpa: 62,
  graduate: true,
};

function App() {
  // if (studentData.firstName !== "Ruby") return null;

  if (studentData.age === 42) {
    return <p>Don't panic.</p>;
  }

  return (
    <>
      {/* // <Student
    // 	firstName={studentData.firstName}
    // 	lastName={studentData.lastName}
    // 	picture={studentData.picture}
    // 	age={studentData.age}
    // 	course={studentData.course}
    // 	city={studentData.city}
    // />
    // <Student {...studentData} /> */}
      <Student person={studentData} />

      {studentData.age >= 18 ? <p>Volljaehrig</p> : <details>Minderjaehrig</details>}

      {studentData.firstName === "Ruby" && <h2>Hallo, Test!</h2>}
    </>
  );
}

export default App;
