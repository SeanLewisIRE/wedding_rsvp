import './App.css';
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Welcome from './components/Welcome/Welcome'
import WhereSection from './components/WhereSection/WhereSection'
import WhenSection from './components/WhenSection/WhenSection'
import Accommodation from './components/Accommodation/Accommodation'
import Directions from './components/Directions/Directions'
import Rsvp from './components/Rsvp/Rsvp'
// import GoodToKnow from './components/GoodToKnow/GoodToKnow'
import ThingsToDo from './components/ThingsToDo/ThingsToDo'

function App() {

  return (
    <div className="App bg-current bg-white">
      <NavBar />
      <Hero />
      <Welcome />
      <WhereSection />
      <WhenSection />
      <Accommodation />
      <Directions />
      <Rsvp />
      {/* <GoodToKnow /> */}
      <ThingsToDo />
    </div>
  );
}

export default App;
