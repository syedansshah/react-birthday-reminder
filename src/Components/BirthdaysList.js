import React, { useState } from 'react';
import People from '../Data/people';
import List from './List';
import Button from '@mui/material/Button';


function BirhtdayList() {
    const [people,setPeople] = useState(People)
    return (
      <>
        <section className='container'>
          <h3>{people.length} Birthday today </h3>
          <List people={people}></List>
          <Button style={{"backgroundColor":"#ff8b00"} } variant="contained" onClick={()=>setPeople([])}>Clear all</Button>
          <Button variant="contained" onClick={()=>setPeople(People)}>Reload</Button>
        </section>
      </>
  
    );
  }
  
  export default BirhtdayList;