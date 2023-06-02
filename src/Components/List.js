import React from 'react';
import { useState } from 'react';

const List = ({people}) => {
 
  return (
    <>
      <h2>list component</h2>
      {people.map((person)=>{
        const {id, name, age, image, dob} = person;
        let profilePic = process.env.PUBLIC_URL + 'userImg.JPG';
         
        if(image){
          profilePic= image;
        }
        return (
          <article id={id} className='person'>
            <img  src={profilePic} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{dob} - {age} years</p>
            </div>
          </article>
        ) 

      })}
    </>
  );
};

export default List;
