import "./App.css";

import topLeft from "./images/topLeft.png";
import topRight from "./images/topRight.png";

function App() {
  return (
    <div className="App">
      <div className="head">
        <img src={topLeft} className="left" alt="logo" />
        <img src={topRight} className="right" alt="menu" />
      </div>
      <div className="hero">
        <h1>Say Hello to ReactJS </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus atque repudiandae enim quasi nesciunt possimus officia
          at odio et.
        </p>
        <button className="heroBtn"></button>
      </div>
    </div>
  );
}
export default App;
