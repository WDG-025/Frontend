// # Zeigt einen Titel und eine Nutzerbegrüßung in der Navigation an
import "./NavBar.css";

function NavBar({ title, user }) {
  // ? Props-Destrukturierung: title und user kommen von der Elternkomponente (App)
  //   console.log(props);
  //   const title = props.title;
  //   const { title } = props;

  // # Conditional Rendering im className: Nutzer "Renke" bekommt eine andere Hintergrundfarbe
  return (
    <nav className="navbar p-2">
      <h2 className=" bg-orange-700">{title}</h2>
      <p className={user === "Renke" ? "bg-red-500" : "bg-green-500"}>
        Welcome, {user}
      </p>
      <ul className="flex justify-around font-bold">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Hello</li>
      </ul>
    </nav>
  );
}

export default NavBar;
