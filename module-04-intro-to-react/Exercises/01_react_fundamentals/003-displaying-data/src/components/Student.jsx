const Student = ({ person }) => {
	const { firstName, age, course, city, lastName, picture, grade } = person;

	// console.log(props);
	return (
		<article className="card">
			<img className="card-image" src={picture} alt="" />
			<div className="card-body">
				<h2>
					{firstName} {lastName}
				</h2>
				<p>Age: {age}</p>
				<p>City: {city}</p>
				<p>Course: {course}</p>
			</div>

			<Klausuren bestanden={grade} />
		</article>
	);
};
export default Student;
