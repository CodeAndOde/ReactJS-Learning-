import componentsImg from './assets/components.png';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept'; 

function App() {
  return (
    <div>
<Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
        <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description ="The core UI building block."
        img={componentsImg}
        />
              <CoreConcept
              title="Learner"
              description = "Hai i am a learner"
              img={componentsImg}/>
              <CoreConcept />
              <CoreConcept/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
