
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  

  return (
    <main className='h-auto w-screen flex justify-center bg-white text-black'>
      <section className='h-auto items-center flex flex-col w-fit md:w-10/12 '>
        <Navbar />
        <section id="Home" className='w-full h-auto my-6 flex flex-col-reverse lg:flex-row lg:justify-evenly items-center gap-2'>
          <Home />
        </section>
        <section id="Projects" className='w-full h-auto flex items-center justify-center my-6 '>
          <Projects />
        </section>
        <section id="Contact" className='w-full h-screen'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold'>Contact Me</h1>
            <h2 className='text-2xl font-semibold'>A job title</h2>
            <p className='text-lg font-medium'>A short description about you</p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
