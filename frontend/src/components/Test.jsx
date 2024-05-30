import React from 'react'
import { useNavigate } from 'react-router-dom';

function Test() {
    const navigate = useNavigate();
    const handleClick = async (event) => {
      event.preventDefault();
      const response = await fetch('http://localhost:5000/api', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          },
      });
      if (response.ok) {
          navigate('/')
          console.log('Success:', response.status, response.statusText);
      } else {
          console.error('Error:', response.status, response.statusText);
      }
    }

  return (
    <>
        <div>test</div>
        <button onClick={handleClick}>Go back</button>
    </>
  )
}


export default Test