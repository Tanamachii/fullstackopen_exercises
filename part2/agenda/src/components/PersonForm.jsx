const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setFilteredPersons,
}) => {
  return (
    <form>
      <div>
        name:{' '}
        <input
          onChange={(e) => {
            setNewName(e.target.value)
          }}
        />
      </div>
      <div>
        Number:{' '}
        <input
          onChange={(e) => {
            setNewNumber(e.target.value)
          }}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault()
            if (persons.some((person) => person.name === newName)) {
              alert(`${newName} is already added to phonebook`)
              return
            }
            setPersons(persons.concat({ name: newName, number: newNumber }))
            setFilteredPersons(
              persons.concat({ name: newName, number: newNumber }),
            )
            setNewNumber('')
            setNewName('')
          }}
          type='submit'
        >
          add
        </button>
      </div>
    </form>
  )
}
export default PersonForm
