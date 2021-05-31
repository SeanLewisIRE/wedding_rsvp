import './App.css';
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Welcome from './components/Welcome/Welcome'
import WhereSection from './components/WhereSection/WhereSection'
import WhenSection from './components/WhenSection/WhenSection'
import Accomodation from './components/Accomodation/Accomodation'
import Directions from './components/Directions/Directions'
function App() {
  return (
    <div className="App bg-current">
      <NavBar />
      <Hero />
      <Welcome />
      <WhereSection />
      <WhenSection />
      <Accomodation />
      <Directions />
    </div>
  );
}

export default App;
