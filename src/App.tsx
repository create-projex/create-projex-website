
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import GettingStarted from './components/GettingStarted'
import Documentation from './components/Documentation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <GettingStarted />
      <Documentation />
      <Footer />
    </div>
  )
}

export default App