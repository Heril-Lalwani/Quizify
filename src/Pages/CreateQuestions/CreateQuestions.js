import React, { useState,useEffect} from 'react'
import "./CreateQuestion.css";

const CreateQuestions = () =>  {
  

  const[quizName,setQuizName]= useState('');
  const [questionCount,setQuestionCount]=useState(0);
  const[questionData,setQuestionData]=useState([]);
  const[questionText,setQuestionText] =useState('');
  const[option1Text,setoption1Text]= useState('');
  const[option2Text,setoption2Text]= useState('');
  const[option3Text,setoption3Text]= useState('');
  const[option4Text,setoption4Text]= useState('');
  const[ans,setAns]=useState('');
  // const[showFinal,setShowFinal]=useState(false);
  
  const handleAddQuestion = () =>{
    let newQuestionData = {
      question: questionText,
      option1: option1Text,
      option2:  option2Text,
      option3: option3Text,
      option4: option4Text,
      correctans: ans
    }
    let updatedQuestionData= [...questionData];
    updatedQuestionData.push(newQuestionData);
    setQuestionData(updatedQuestionData);
    console.log(questionData);  
    localStorage.setItem(quizName,JSON.stringify(questionData));
   }
   
  const startquestion=()=>{
    // let temp =questionCount+1;
    setQuestionCount(questionCount+1);
    // const questionIndex =
    // questionCount++;
    console.log(questionCount);
  };
  
  useEffect(()=>{
    
    console.log(localStorage.getItem(quizName));
    let savedquestiondata = JSON.parse(localStorage.getItem(quizName));
    if(savedquestiondata)
    {
      setQuestionData(savedquestiondata); 
    }
  },[]);
  
  const handleStartQuestion = () => {
    console.log(localStorage.getItem(quizName));
    setQuestionCount(questionCount+1);
    // Check if the user has submitted the form five times
    if (questionCount < 5) {
      // Submit the form
      document.getElementById('quizForm').submit();
    }
  };




  return(
    <div className="mainbox">
    <h1>QUIZIFY</h1>
    <h2>Enter Name of Quiz</h2>
    <input 
      type="text" 
      onChange={(event)=>setQuizName(event.target.value)} 
      placeholder="Enter name of the quiz...." 
      required
  />
    <h2>Number of question remaining {questionCount}</h2>
    {/*  Form starting     */}
    <form onSubmit={handleAddQuestion}>  
      <br />
      
      <br />
    <h2>Write your Question </h2>
    <input 
      type="text"
      placeholder='Enter your Question...'
      required
      onChange={(event)=>setQuestionText(event.target.value)}
    />
    
    <h3>Options 1:</h3>
    <input 
        type="text" 
        placeholder='Enter your option 1 ....'
        required
        onChange={(event)=>setoption1Text(event.target.value)} 
        />

    <h3>Options 2:</h3>
    <input 
      type="text" 
      placeholder='Enter your option 2 ....'
      required
      onChange={(event)=>setoption2Text(event.target.value)} 
    />

    <h3>Options 3:</h3>
    <input 
      type="text" 
      placeholder='Enter your option 3 ....'
      required
      onChange={(event)=>setoption3Text(event.target.value)} 
    />

    <h3>Options 4:</h3>
    <input 
      type="text" 
      placeholder='Enter your option 4 ....'
      required
      onChange={(event)=>setoption4Text(event.target.value)} 
    />

    <h3>Which option is correct</h3>
    <label>
      <input type="radio" name="Radioans" value="1" required="required" onChange={(event)=>setAns(event.target.value)} /> Option 1
    </label>
    
    <label>
        <input type="radio" name="Radioans" value="2"  required="required" onChange={(event)=>setAns(event.target.value)}/> Option 2
    </label>
    
    <label>
        <input type="radio" name="Radioans" value="3"  required="required" onChange={(event)=>setAns(event.target.value)}/> Option 3
    </label>
    
    <label>
        <input type="radio" name="Radioans" value="4" required="required" onChange={(event)=>setAns(event.target.value)}/> Option 4
    </label>
    <br />
    <br />

    {/* <button type="submit" onClick={handleAddQuestion}>Submit Your Questions</button> */}
    <button type="submit" >Submit Your Questions</button>

  </form>

  
  <button onClick={handleStartQuestion}>Add Next Question</button>
    
  

</div>

  );
  
}

export default CreateQuestions