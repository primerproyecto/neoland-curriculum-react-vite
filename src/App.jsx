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
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
        <Hero hero={hero} />
        <hr />
        <About hero={hero} />
        <hr />
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
        <hr />
        <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  );
}

export default App
