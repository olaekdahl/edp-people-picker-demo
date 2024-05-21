import PropTypes from 'prop-types';
import './Person.css';

export const Person = (props) => {
  const person = props.person;
  return <section className="Person card flex-grow-1">
    <img src={`${person.imageUrl}`} className='card-img-top' />
    <div className='card-body'>
      <h3 className='card-title'>{person.first} {person.last}</h3>
      <table>
        <tbody>
          <tr><td>Email</td><td>{person.email}</td></tr>
          <tr><td>Age</td><td>{person.age}</td></tr>
        </tbody>
      </table>
    </div>
  </section>
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
}