import './App.css';
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Welcome from './components/Welcome/Welcome'
import WhereSection from './components/WhereSection/WhereSection'
import WhenSection from './components/WhenSection/WhenSection'
import Accomodation from './components/Accomodation/Accomodation'

function App() {
  return (
    <div className="App bg-current">
      <NavBar />
      <Hero />
      <Welcome />
      <WhereSection />
      <WhenSection />
      <Accomodation />
    </div>
  );
}

export default App;
