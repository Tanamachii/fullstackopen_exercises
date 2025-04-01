import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
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
      </div>
      <h2>Add a new</h2>
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
              setNewNumber('')
              setNewName('')
            }}
            type='submit'
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default App
