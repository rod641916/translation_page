import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from "./components/Template"
import Home from './pages/Home';
import About_Us from './pages/About_Us';

function App() {

  return (
    <Router>
      <Template>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About_Us />} />
          <Route path='/out-services' element={<About_Us />} />
          <Route path='/industries' element={<About_Us />} />
          <Route path='/data-security' element={<About_Us />} />
          <Route path='/customers' element={<About_Us />} />
          <Route path='/constact-us' element={<About_Us />} />
        </Routes>
      </Template>
    </Router>
  )
}

export default App
