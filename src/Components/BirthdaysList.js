import React, { useState } from 'react';
import People from '../Data/people';
import List from './List';

function BirhtdayList() {
    const [people,setPeople] = useState(People)
    return (
      <main>
        <section className='container'>
          <h3>{people.length} Birhtday today </h3>
          <List people={people}></List>
          
          <button style={{"backgroundColor":"#ff8b00"}} onClick={()=>setPeople([])}> Clear all</button>
          <button onClick={()=>setPeople(People)}> Reload</button>
        </section>
      </main>
  
    );
  }
  
  export default BirhtdayList;