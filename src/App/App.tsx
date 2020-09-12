import { Route } from "react-router-dom"
import React, { useState, useEffect } from 'react'

import Home from "../Home/Home"
import Header from '../Header/Header'
import About from "../About/About"
import Location from "../Location/Location"

import './App.scss'

import { getAirQualityData } from '../helpers/apiCalls'

import { getAllData } from '../helpers/dataCleaner'

const App: React.FC = () => {
  const [ topCities, setTopCities ] = useState([])
  
  // getAllData('denver')
  

  return (
    <div className="App">
      <Header />
      <main>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <About />;
          }}
        />
        <Route
          exact
          path="/:location"
          render={({ match }) => {
            return <Location />;
          }}
        />
      </main>
    </div>
  );
}

export default App
