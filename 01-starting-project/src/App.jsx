import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
const reactDescriptions =['Fundamanetal','Crucial','Core'];

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

function Header(){
  const dynamicDescription = reactDescriptions[getRandomInt(2)];
  return(
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {dynamicDescription} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}
//props
function CoreConcept(props){
  return(<li>
    <img src={props.img} alt="..."/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>)
}
function App() {
  return (
    <div>
<Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
        <CoreConcept
        title="DotNet Developer"
        description ="The core UI building block."
        img={componentsImg}
        />
              <CoreConcept
              title="Learner"
              description = "Hai i am a learner"
              img={componentsImg}/>
              <CoreConcept/>
              <CoreConcept/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
