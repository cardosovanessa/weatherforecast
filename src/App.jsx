import React, { useState, useEffect } from 'react'
import './App.css'
import HelloWorld from './components/HelloWord'
import { api } from './services/api'
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [weather, setWeather] = useState(null) 
  const city = 'Curitiba';

  async function handleGetWeather(){
    const response = await api.get(city)
    console.log(response)
    setWeather (response.data)
  }

  useEffect(() => {
    handleGetWeather()
  })

  return (
    <div className="App">
      {/* <h1>{'hello world'.toUpperCase()}</h1>
      <HelloWorld/> */}

      {/* <header>
        <button onClick={handleGetWeather}>enviar</button>
      </header>
            */}
        {weather &&
        <main>
          {/* <p>{JSON.stringify(weather)}</p> */}
        
        <h1>{city}</h1>

          <section className='current-weather'>
            <h2>Current weather</h2>

            <p>{weather.temperature}</p>
            <p>{weather.description}</p>

          </section>

          <section className='forecast'>
            <h2>Forecast</h2>
            <ol>
            {
              weather.forecast.map( day =>
                <li>
                  <div>
                    <FaTemperatureHigh />
                    <p>{day.temperature}</p>
                    </div>
                  
                  <div>
                    <FaWind />
                    <p>{day.wind}</p>
                    </div>
                </li>
              )
            } 
            </ol>          
          </section>
        </main>
        } 
      </div>
    )
  }

export default App
