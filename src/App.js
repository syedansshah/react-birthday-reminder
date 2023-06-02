import React, { useState } from 'react';
import data from './Data/data';
import List from './Components/List';
function App() {
  const [people,setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birhtday today </h3>
        <List people={people}></List>
        
        <button style={{"backgroundColor":"#ff8b00"}} onClick={()=>setPeople([])}> Clear all</button>
        <button onClick={()=>setPeople(data)}> Reload</button>
      </section>
    </main>

  );
}

export default App;
