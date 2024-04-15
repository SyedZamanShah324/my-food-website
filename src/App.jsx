import Catgories from './Components/Catgories'
import Food from './Components/Food'
import Footer from './Components/Footer'
import Headline from './Components/Headline'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import './index.css'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Headline/>
      <Food />
      
      <Catgories />
      <Footer />

    </div>
  )
}

export default App