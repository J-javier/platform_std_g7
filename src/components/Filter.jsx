/* Solo una prueba */

import {useNavigate} from "react-router-dom";


const Filter = ({handleChange}) => {

  const navigate = useNavigate();

    const handleReturn = (e) => {
        e.preventDefault();

        navigate('/'); 
      }


  return (
    <div>
        <h4>Filter:</h4>
        <input
          onChange={handleChange}
          type="text"
          id="filter"
          placeholder="filter by name"
        />

        <button className="btn" onClick={handleReturn}>Cerrar Sesion</button>
      </div>
  )
}

export default Filter