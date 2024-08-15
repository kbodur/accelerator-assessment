import "./App.css";
import Animes from "./Components/Animes";
import Navbar from "./Components/Navbar";
import NewAnime from "./Components/NewAnime";
import CollectName from "./Components/CollectName";
import Names from "./Components/Names";
import FourOFour from "./Components/Four0Four";
import Anime from "./Components/Anime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Anime />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/animes/new" element={<NewAnime />} />
            <Route path="/collect-name" element={<CollectName updateName={(name) => console.log(name)} />} />
            <Route path="/names" element={<Names name="John Doe" />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
// import "./App.css";
// import Animes from "./Components/Animes";

// function App() {
//   return (
//     <div className="App">
//       <Animes />
//     </div>
//   );
// }

// export default App;