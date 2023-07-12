
const Filter = ({handleChange}) => {
  return (
    <div>
        <h4>Filter:</h4>
        <input
          onChange={handleChange}
          type="text"
          id="filter"
          placeholder="filter by name"
        />
      </div>
  )
}

export default Filter