import Navbar from "./components/NavigationBar/navbar";
import Home from "./components/Intro/intro";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Exercises from './components/Intro/exercises';
import SymptomTracker from "./components/Intro/symptomtracker";
import FeedbackForm from "./components/Intro/ContactUs"; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/symptom-tracker" element={<SymptomTracker />} />
        <Route path="/contact-us" element={<FeedbackForm/>} />
      </Routes>
    </Router>
  );
};

// function App() {
//   return (
//     <div className="App">
//         <Navbar/>
//         <Intro/>
//     </div>
//   );
// }



export default App;
