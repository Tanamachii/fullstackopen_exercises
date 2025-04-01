const Filter = ({ persons, setFilteredPersons }) => {
  return (
    <div>
      Filter shown with:
      <input
        onChange={(e) => {
          const filter = e.target.value

          setFilteredPersons(
            persons.filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase()),
            ),
          )
        }}
      />
    </div>
  )
}

export default Filter
