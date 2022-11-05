import { Router, Route } from 'electron-router-dom'

import { MainScreen, AboutScreen, AnotherScreen } from 'renderer/screens'
import { DigitalOceanScreen } from './screens/DigitalOcean'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/anotherScreen" element={<AnotherScreen />} />
          <Route path="/digitalOcean" element={<DigitalOceanScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
    />
  )
}
