import React from 'react';
// import data from './data';

const List = (props) => {
  const { people } = props;

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    props.funcPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className='person' key={id} style={{ position: 'relative' }}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} Years Old</p>
            </div>
            <h2
              style={{ position: 'absolute', left: '98%', cursor: 'pointer' }}
              onClick={() => removePerson(id)}
            >
              X
            </h2>
          </article>
        );
      })}
    </>
  );
};
export default List;
