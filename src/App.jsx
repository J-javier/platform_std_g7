import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import alumnosM from "./components/alumnos";
import Row from "./components/Row";
import Filter from "./components/Filter";

function App() {
  const [filtered, setFiltered] = useState(alumnosM);

  const handleChange = (e) => {
    let keyWord = e.target.value.toLowerCase();

    let arr = alumnosM.filter((alumno) => {
      let name = alumno.name.toLowerCase(); // recibo un string

      return name.includes(keyWord);
    });

    setFiltered(arr);
  };

  // const bootstrap = bootstrap();

  return (
    <>
      
      <main className="container">
      <Filter handleChange={handleChange} />

        <h2 className="mt-4">Students Info</h2>
        <table className="table text-center border">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Grade</th>
              <th scope="col">Age</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody id="t-body">
            {filtered.map((alumno, idx) => <Row key={idx} alumno={alumno} /> )}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
