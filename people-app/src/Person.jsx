import PropTypes from 'prop-types';
// import './Person.css';

//TODO: Add a picture placeholder
//TODO: Style this to look like a card (via Bootstrap?)
export const Person = (props) => {
  const person = props.person;
  const cardWidth = 200;
  return <section className="Person card flex-grow-1" style={sectionStyle}>
    <img src={`http://placekitten.com/${cardWidth}/${cardWidth}`} className='card-img-top' />
    <div className='card-body'>
      <h3 className='card-title'>{person.first} {person.last}</h3>
      <table>
        <tr><td>Email</td><td>{person.email}</td></tr>
        <tr><td>Age</td><td>{person.age}</td></tr>
      </table>
    </div>
  </section>
}

const sectionStyle = {
  //width: 200,
};

Person.propTypes = {
  person: PropTypes.string.isRequired,
}