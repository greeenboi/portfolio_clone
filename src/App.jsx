import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-auto w-screen md:flex md:justify-center bg-white'>
      <section className='min-h-screen justify-self-center flex flex-col w-full md:w-10/12 '>
        <Navbar />
        <section id="Home"></section>
        <section id="Projects"></section>
        <section id="Contact"></section>
      </section>
    </main>
  )
}

export default App
