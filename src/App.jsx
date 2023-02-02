import { useState } from "react";
import "./App.css";
import About from "./components/About/index.jsx"
import Hero from "./components/Hero/index.jsx"
import Education from "./components/Education/index.jsx"
import More from "./components/More/index.jsx"
import Experience from "./components/Experience/index.jsx"
import { CV } from "./CV/CV";


const { hero, education, experience, languages, habilities, volunteer } = CV;
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        <Experience experience={experience} />
        <Education education={education} />
        <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  );
}

export default App
