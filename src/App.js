import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div >
      <Navbar></Navbar>
     <Gallery></Gallery>
     <div className='question-answer'>
       <h1>Q. How React Works </h1>
       <p>
      01. At its very core, React basically maintains a tree for and this  tree is able to do efficient diff computations on the nodes. <br />
      02. React allows to effectively re-construct DOM in JavaScript and push only those changes to the DOM which have actually occurred. <br />
      03. There's nothing like JSX - neither to JavaScript, nor to the browser. JSX is simply syntactic sugar for creating very specific JavaScript objects. <br />
      04. When starts writing nested stuff, not only is this difficult to code, but it also becomes very inconvenient to maintain such a codebase. JSX thus helps bring the cleanliness of HTML to the power of JavaScript.
       </p>
       <h1>Q. Props Vs State</h1>
       <p>
        01. Props are read-only. State changes can be asynchronous. <br />
        02. Props are immutable. State is mutable. <br />
        03. Props allow you to pass data from one component to other  components as an argument. State holds information about the components. <br />
        04. Stateless component can have Props.	Stateless components cannot have State. <br />
        05. Props make components reusable.	State cannot make components reusable. <br />
        06. Props are used to communicate between components.	States can be used for rendering dynamic changes with the component.
       </p>
     </div>
    </div>
  );
}

export default App;
