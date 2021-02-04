import './App.css';
import { animals } from './animals';
import React from 'react';

function App() {
  const background = <img className='background' alt='ocean' src="./images/ocean.png" />
  const title = ''
  const images = []
  const showBackground = true

  for(const animal in animals){
    images.push(<img key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}/>)
  }

  function displayFact(e) {
    const animal = animals[e.target.alt]
    const index = Math.floor(Math.random() * animal.facts.length)
    document.getElementById('fact').innerHTML = animal.facts[index]
  }

  return (
    <div>
      <h1>{title ? title : 'Click an animal for a fun fact'}</h1>
      {showBackground ? background : ''}
      <div className='animals'>
      {images}
      </div>
      <p id='fact'></p>
    </div>
  )
}

export default App;