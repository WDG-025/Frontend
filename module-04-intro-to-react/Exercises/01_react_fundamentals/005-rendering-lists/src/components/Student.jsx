import Grade from "./Grade";

const Student = ({ person }) => {
  const { firstName, age, course, city, lastName, picture, gpa, graduate } = person;

  return (
    <article className={`card ${graduate ? "card-graduate" : ""}`}>
      <img className="card-image" src={picture} alt="" />
      <div className="card-body">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Course: {course}</p>
        <Grade gpa={gpa} />
        <p>Status: {graduate ? "Alumnus" : "Student"}</p>
      </div>
    </article>
  );
};
export default Student;

// JSX: pseudo-HTML     {} in JS
// `Text und so ... ${hier ist JS}`
