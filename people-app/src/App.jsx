import { useEffect, useState } from 'react';
import { ButtonBar } from "./ButtonBar"
import { PeopleList } from "./PeopleList"
import { Person } from './Person'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  const [state, setState] = useState({ pickedPerson: undefined, pickedPeople: [], unpickedPeople: [] })
  const { pickedPerson, pickedPeople, unpickedPeople } = state;
  useEffect(() => {
    reset();
  }, []);
  console.log("people are", state.unpickedPeople)
  return (
    <>
      <header></header>
      <main>
        <h1>People Picker</h1>
        <ButtonBar reset={reset} pickRandomPerson={pickRandomPerson} />
        {pickedPerson && <>
          <h1>The next person is ...</h1>
          <Person person={pickedPerson} />
        </>}
        <PeopleList people={unpickedPeople} title="Unpicked people" />
        <PeopleList people={pickedPeople} title="Already chosen" />
      </main>
      <footer></footer>
    </>
  )


  async function reset() {
    const unpickedPeople = await fetch('http://localhost:3000/api/allPeople')
      .then(res => res.json())

    setState({
      ...state,
      pickedPeople: [],
      unpickedPeople,
      pickedPerson: undefined,
    })
  }

  function pickRandomPerson() {
    const randomIndex = Math.floor(Math.random() * unpickedPeople.length);
    const newPickedPerson = unpickedPeople[randomIndex]
    setState({
      ...state,
      pickedPeople: pickedPerson ? [...pickedPeople, pickedPerson] : pickedPeople,
      unpickedPeople: unpickedPeople.filter(p => p !== newPickedPerson),
      pickedPerson: newPickedPerson,
    })
  }
}

export default App
