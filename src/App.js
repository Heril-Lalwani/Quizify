import React from 'react';
import { BrowserRouter as Router ,Routes, Route,Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home';
import Navbar from './Components/Navbar';
// import Question from './Pages/Question/Question';
// import Quiz from './Pages/Question/Quiz';
// import Quiz from './Pages/Question/Quiz';
// import {Quiz} from './Pages/Question/Quiz';
// import Quiz from '../../my-quiz/src/Quiz';
import CreateQuestions from './Pages/CreateQuestions/CreateQuestions';
// import { oopsQuestions } from './QuestionDatas/OOPS';
function App() {
  return (
    <div className="App" >
       <Router>
       <Navbar/>
       {/* <Quiz questions={oopsQuestions.questions}/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/quiz" element={<Quiz/>} /> */}
          <Route path='/createquestions' element={<CreateQuestions/>}/>
          
        </Routes>
       </Router>

    </div>
  );
}

export default App;
