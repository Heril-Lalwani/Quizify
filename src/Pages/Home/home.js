import React, { useEffect, useState } from 'react'
import  "./home.css";
import { Link, useActionData } from 'react-router-dom';
const Home = () => {
    
    const [personName,setPersonName] = useState("");
    const [quizName,setQuizName] = useState("oops");
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //   ]
    // useEffect(()=>{
    //     let savedquizname = Js
    // });
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            personName,quizName
        };
        console.log(data);
    };
  
  
    return (
    <div className="whole">
    <div className="create">
    <h1>QUIZIFY</h1>
    <h2>Please Select the question banks</h2>
        
        <form onSubmit={handleSubmit}>
            <label ><b>Enter Your Name:</b></label>
            <input 
                type="text" 
                placeholder='Enter Your Name...'
                required
                value={personName}
                onChange={(e)=>setPersonName(e.target.value)}
            />
            <label> <b>Select the Quiz Topic:</b></label>
                <select    
                    value={quizName}
                    onChange={(e)=>setQuizName(e.target.value)}
                >
                    <option value="oops">oops</option>
                    <option value="os">operation system</option>
                    <option value="dbms">dbms</option>
                </select>
        
            <button>Play</button>

        </form>
        
    
    
    
    <h2>Create your own Questions Bank for the test</h2>
        <Link to="createquestions"><button >Create Questions</button></Link>

   </div>
   </div>
  )
}

export default Home