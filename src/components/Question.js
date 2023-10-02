
import './questions.css'


function Question(props){
    return(
        <>
            <h2>Current Score :0</h2>
            <div className='question-card'>
                <h2>Question 1 out of 5  </h2>
                <h3>Adin ne?</h3>
                <ul className='answers'>
                    <li>Mehmet</li>
                    <li>Altay</li>
                    <li>Serter</li>
                    <li>Cimen</li>
                </ul>
            </div>
        </>


    )
}

export default Question;