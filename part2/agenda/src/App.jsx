import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
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
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default App
