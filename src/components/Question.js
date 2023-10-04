
import React , {useState} from 'react'

import './questions.css'
import {deselectOptions} from "@testing-library/user-event/dist/select-options";


function Question(props){

//Property

    const [showFinalResults,setFinalResults] = useState(false)
    const [score,setScore] = useState(0);
    const[currentQuestion,setCurrentQuestion] =useState(0)
    const questions = [
        {
            text: "What country has the highest life expectancy?",
            options: [
                { id: 0, text: "Australia", isCorrect: false },
                { id: 1, text: "New Zealand", isCorrect: false },
                { id: 2, text: "Turkey", isCorrect: false },
                { id: 3, text: "Hong Kong", isCorrect: true },
            ],
        },
        {
            text: "Where would you be if you were standing on the Spanish Steps?",
            options: [
                { id: 0, text: "Rome", isCorrect: true },
                { id: 1, text: "Istanbul", isCorrect: false },
                { id: 2, text: "London", isCorrect: false },
                { id: 3, text: "Paris", isCorrect: false },
            ],
        },
        {
            text: "What year was the United Nations established?",
            options: [
                { id: 0, text: "1945", isCorrect: true },
                { id: 1, text: "1988", isCorrect: false },
                { id: 2, text: "1948", isCorrect: false },
                { id: 3, text: "1952", isCorrect: false },
            ],
        },
        {
            text: "How many minutes are in a full week?",
            options: [
                { id: 0, text: "11,050", isCorrect: false },
                { id: 1, text: "10,080", isCorrect: true },
                { id: 2, text: "9,850", isCorrect: false },
                { id: 3, text: "15,874", isCorrect: false },
            ],
        },
        {
            text: "How many elements are in the periodic table?",
            options: [
                { id: 0, text: "121", isCorrect: false },
                { id: 1, text: "118", isCorrect: true },
                { id: 2, text: "147", isCorrect: false },
                { id: 3, text: "135", isCorrect: false },
            ],
        },
        {
            text: "Aureolin is a shade of what color?",
            options: [
                { id: 0, text: "Red", isCorrect: false },
                { id: 1, text: "Blue", isCorrect: false },
                { id: 2, text: "Yellow", isCorrect: true },
                { id: 3, text: "Pink", isCorrect: false },
            ],
        },
        {
            text: "What country drinks the most coffee per capita?",
            options: [
                { id: 0, text: "Finland", isCorrect: true },
                { id: 1, text: "Turkey", isCorrect: false },
                { id: 2, text: "England", isCorrect: false },
                { id: 3, text: "France", isCorrect: false },
            ],
        },
        {
            text: "Which planet has the most moons?",
            options: [
                { id: 0, text: "Earth", isCorrect: false },
                { id: 1, text: "Mars", isCorrect: false },
                { id: 2, text: "Venus", isCorrect: false },
                { id: 3, text: "Saturn", isCorrect: true },
            ],
        },
        {
            text: "How many bones do we have in an ear?",
            options: [
                { id: 0, text: "5", isCorrect: false },
                { id: 1, text: "3", isCorrect: true },
                { id: 2, text: "12", isCorrect: false },
                { id: 3, text: "2", isCorrect: false },
            ],
        },
    ];
//Helper Function

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score+1)
        }
        if (currentQuestion+1 <questions.length) {
            setCurrentQuestion(currentQuestion+1)
        }else{
            setFinalResults(true)
        }

    }

    const restartGame=() => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false)
    }
    return(
        <>
            <h2>Current Score :{score}</h2>
            {showFinalResults ? (<div className='final-results'>
                <h1>Final Results</h1>
                <h2> {score} out of {questions.length} correct - ({(score/questions.length) * 100}%)</h2>
                <button onClick={restartGame}>Restart Game</button>
            </div>) :(  <div className='question-card'>
                <h2>Question {currentQuestion+1} out of {questions.length}  </h2>
                <h3 className='question-text'>{questions[currentQuestion].text}</h3>
                <ul className='answers'>
                    {questions[currentQuestion].options.map((option) =>{
                        return (
                            <li onClick={()=>{
                                optionClicked(option.isCorrect)
                            }} key={option.id}>{option.text}</li>
                        )
                    })}
                </ul>
            </div>)  }


        </>


    )
}

export default Question;