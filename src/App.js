import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import Direction from './components/pages/Direction'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
// import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/direction" element={<Direction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    {/* </><div> */}
        {/* <ThemeSwitcher /> */}
      {/* </div> */}
      </>
    );
}

export default App;
