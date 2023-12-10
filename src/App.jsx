
import Navbar from './components/Navbar'
import './App.css'
import Person from './assets/person.jpg'
import { 
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function App() {
  

  return (
    <main className='h-auto w-screen flex justify-center bg-white text-black'>
      <section className='h-auto items-center flex flex-col w-fit md:w-10/12 '>
        <Navbar />
        <section id="Home" className='w-full h-auto mb-6 flex flex-col-reverse lg:flex-row lg:justify-evenly items-center gap-2'>
          <div className='flex-2 flex flex-col w-full lg:mr-12 lg:h-max border p-24 rounded-md bgclass gap-12 '>
            <h1 className='text-6xl font-afacad font-bold'>{`Hello, I'm Name, a product Designer With 7 years of experience.`}</h1>
            <h2 className='text-xl font-afacad font-normal'>I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</h2>
            <div className=' mt-12 lg:mx-6 flex lg:flex-row md:gap-2 lg:gap-8'>
              <button className='bg-black text-white px-6 py-1 lg:px-8 lg:py-2 rounded-xl'>Contact me</button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black'><FaDribbble /></button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black'><FaInstagram /></button>
              <button className='bg-white hover:bg-gray-500 text-black transition-all p-4 text-2xl rounded-full border border-black'><FaLinkedin /></button>

            </div>
          </div>
          <img src={Person} alt="person" className=' flex flex-1 w-96 h-auto lg:h-fit rounded-lg lg:ml-12'/>
          
        </section>
        <section id="Projects" className='w-full h-screen '>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold'>My Projects</h1>
            <h2 className='text-2xl font-semibold'>A job title</h2>
            <p className='text-lg font-medium'>A short description about you</p>
          </div>
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
