import './App.css';
import Banner from './Banner.js'
import AboutMe from './AboutMe.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import Nav from './Nav.js'

function App() {
  return (
    <div className="app">
        <Nav />
        <Banner />
        <AboutMe />
        <Portfolio />
        <Contact />
    </div>
  );
}

export default App;
