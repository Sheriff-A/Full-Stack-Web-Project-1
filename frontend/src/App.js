import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// Page Components
import { Navbar } from './components/Navbar/Navbar'
import { HomePage } from './components/HomePage'
import { DarkMode } from './components/DarkMode/DarkMode'
import { GlassMorphism } from './components/GlassMorphism/GlassMorphism'
import {ContactPage} from './components/Contact-Page/ContactPage'

// General Page CSS
import './css-sass/main.css'
import { Footer } from './components/Footer/footer'

export const App = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/dark-mode'} component={DarkMode} />
        <Route exact path={'/glass'} component={GlassMorphism} />
        <Route exact path={'/contact'} component={ContactPage} />
      </Switch>

      {/* <Socials /> */}
      <Footer />
    </div>
  )
}
