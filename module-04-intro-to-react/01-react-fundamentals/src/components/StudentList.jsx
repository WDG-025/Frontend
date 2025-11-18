// * Studentenliste mit Daten aus einem separaten Modul
// # Der Import trennt Daten (studentdata) von der Darstellung (StudentList)
import { students } from "../data/studentdata";

const StudentList = () => {
  /* <li>Elsa from Iran</li>
      <li>Dandy from Germany</li>
      <li>Monica from Romania</li> */

  // * Listen-Rendering mit map
  // ? Jeder Eintrag erhält einen eindeutigen key (student.id), damit React effizient rendern kann
  return (
    <ul>
      {students.map((student) => {
        return (
          <li key={student.id}>
            {student.name} from {student.country}
          </li>
        );
      })}
    </ul>
    // <ul>
    //   {students.map(({ id, name, country }) => {
    //     return (
    //       <li key={id}>
    //         {name} from {country}
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};
export default StudentList;
