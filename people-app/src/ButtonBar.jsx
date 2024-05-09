/* eslint-disable react/prop-types */

export function ButtonBar({ reset, pickRandomPerson }) {
  return <section>
    <button onClick={reset}>Reset</button>
    <button onClick={pickRandomPerson}>Pick Random Person</button>
  </section>
}