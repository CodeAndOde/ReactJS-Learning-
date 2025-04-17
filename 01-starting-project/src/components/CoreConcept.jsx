import { CORE_CONCEPTS } from '../data'; //name import should be imported in the crully bracket 


//props
// CoreConcept.jsx
export default function CoreConcept(props) {
  return (
      <li>
          <img src={props.img} alt="..." />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
      </li>
  );
}
