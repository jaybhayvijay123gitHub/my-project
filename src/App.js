// import logo from "./logo.svg";
import "./App.css";
import Book from "./Book.js";

function App() {
  const sentence = "This Is My First React Project!";

  return (
    <div>
      <h2>{sentence}</h2>
      <h2>Hi Its Working Now! </h2>
      <Book carColor="red" name="Feraaree"  />
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
