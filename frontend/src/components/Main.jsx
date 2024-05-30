import React from 'react'
import { DiGithubFull } from "react-icons/di";
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const handleClick = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/test', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            navigate('/test');
        } else {
            console.error('Error:', response.status, response.statusText);
        }
    }

  return (
    <>
        <h1>kieny.me</h1>
        <p>This project is under construction...</p>

        <h2>View this project</h2>
        <button className='github-button'>
            <a href="https://github.com/jackkieny/kieny-me" target="_blank">
                <DiGithubFull className='github-icon'/>
            </a>
        </button>

        <button onClick={handleClick}>
            <h2>Next page</h2>
        </button>
    </>
  )
}

export default Main