import React from 'react'
import { MainLayout } from './layout'
import { Route, Routes } from 'react-router'
import { AboutPage, ContactPage, HomePage } from './pages'

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path='/contact' element={<ContactPage /> }/>
        <Route path='/about' element={<AboutPage /> }/>
      </Routes>
    </MainLayout>
  )
}

export default App
