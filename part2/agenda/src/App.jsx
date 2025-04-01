import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

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
          <button
            onClick={(e) => {
              e.preventDefault()
              setPersons(persons.concat({ name: newName }))
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
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  )
}

export default App
