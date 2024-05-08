import { useState } from 'react';
import { ButtonBar } from "./ButtonBar"
import { Person } from "./Person"
import { UnpickedPeople } from "./UnpickedPeople"
import { PickedPeople } from "./PickedPeople"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  let [people, setPeople] = useState([{ first: "Max" }]);
  console.log("people are", people)
  // let person = people[0];
  let unpickedPeople = people;
  return (
    <>
      <header></header>
      <main>
        <h1>People Picker</h1>
        <button onClick={() => fetchPeople()}>Get people</button>
        {/* <ButtonBar /> */}
        <h1>The next person is ...</h1>
        {/* <Person person={person} /> */}
        <UnpickedPeople unpickedPeople={unpickedPeople} />
        <PickedPeople />
      </main>
      <footer></footer>
    </>
  )

  async function fetchPeople() {
    await fetch('http://localhost:3000/api/allPeople')
      .then(x => (console.log(x), x))
      .then(res => res.json())
      .then(data => (console.log(data), data))
      .then(ppl => setPeople(ppl))
      .then(data => (console.log(data), data))
  }
}


export default App
