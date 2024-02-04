// src/components/Event.js

import { useState } from 'react'

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);


  return (
    <li className='event'>
      <h1>{event.summary}</h1>
      <h2>{event.created}</h2>
      <h2>{event.location}</h2>
      {showDetails ?
        <p className='details'>{event.description}</p>
        : null
      }
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >{showDetails ? 'hide details' : 'show details'}</button>
    </li>
  );
}

export default Event;