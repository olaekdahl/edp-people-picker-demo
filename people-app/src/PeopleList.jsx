/* eslint-disable react/prop-types */
import { Person } from './Person';

export const PeopleList = ({ people, title }) => {
  return <section>
    <h1>{title}</h1>
    {(people && people.length === 0) ?
      <h2>No one is in this list.</h2>
      :
      <section className="d-flex flex-wrap gap-3 justify-content-between">
        {people?.map((p) => <Person person={p} key={p.id} />)}
      </section>
    }
  </section>
}