import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  const clearPeople = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h2>{people.length} Birthdays Today</h2>
        <List people={people} funcPeople={setPeople} />

        <button type='button' onClick={clearPeople}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
