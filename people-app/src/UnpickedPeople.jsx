/* eslint-disable react/prop-types */
import { Person } from './Person';

export const UnpickedPeople = (props) => {
  const unpickedPeople = props.unpickedPeople;
  //unpickedPeople.length = 0;
  return <section>
    <h1>UnpickedPeople</h1>
    {(unpickedPeople.length === 0) ?
      <h2>Everyone is already picked. You are finished.</h2>
      :
      <section className="d-flex flex-wrap gap-3 justify-content-between">
        {unpickedPeople.map((p, i) => <Person person={p} key={i} />)}
      </section>
    }
  </section>
}