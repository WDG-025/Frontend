import Student from "./components/Student";

const studentData = {
	id: 1,
	firstName: "Testy",
	lastName: "McTest",
	age: 42,
	course: "Web Development",
	city: "Berlin",
	picture: "https://randomuser.me/api/portraits/men/1.jpg",
	grade: 96,
};

function App() {
	return (
		// <Student
		// 	firstName={studentData.firstName}
		// 	lastName={studentData.lastName}
		// 	picture={studentData.picture}
		// 	age={studentData.age}
		// 	course={studentData.course}
		// 	city={studentData.city}
		// />
		// <Student {...studentData} />
		<Student person={studentData} />
	);
}

export default App;
