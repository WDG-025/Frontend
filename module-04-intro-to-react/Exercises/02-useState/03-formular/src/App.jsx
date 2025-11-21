import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  phone: "+49546345",
  message: "hallo",
};

function App() {
  // const [name, setName] = useState("Hieronymus");
  const [formState, setFormstate] = useState(initialFormState);

  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newFormState = { ...formState, [field]: value };
    setFormstate(newFormState);
    // setFormstate({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <h1>React: controlled form</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "42rem" }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={formState.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={formState.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default App;
