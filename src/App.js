import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/react-portfolio/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
          <Route path="/react-portfolio/projects" element={<Projects />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
