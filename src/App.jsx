import { Box, useColorModeValue } from "@chakra-ui/react";

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

 const bg = useColorModeValue('purple.50', 'black');

  return (
    <Box bg={bg} minH="100vh">

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </Box>
  )
}

export default App