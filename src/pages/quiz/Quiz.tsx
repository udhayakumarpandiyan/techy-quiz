import { FC, useState } from "react";
import TopBar from "../../components/TopBar";
import './Quiz.css';
import Question from "./components/Question";

interface QuizProps {
    title: string;
}
const questions = [{
    id: '1', title: `console.log((100/0)*0);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '3',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false },
    ],
    difficultyLevel: 1,
    isAnswered: false,
}, {
    id: '2', title: `console.log((0/0)*0);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '3', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '4', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '5', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '6', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '7', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '8', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '9', title: `console.log((0/0)*100);   What will be the output of this code snippet? `,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
},
{
    id: '10', title: `test`,
    category: 'javascript', answerId: '2',
    options: [{ id: '1', value: 'Infinity', isAnswer: false },
    { id: '2', value: '0', isAnswer: false },
    { id: '3', value: 'NaN', isAnswer: false },
    { id: '4', value: 'None of the Above ', isAnswer: false }
    ],
    isAnswered: false,
}];
const Quiz: FC<QuizProps> = ({ title }) => {
    const [currentQuestion, setCurrentQuestion] = useState<any>(() => {
        return {
            order: 1,
            question: questions[0]
        }
    }
    );

    const onPreviousButtonClick = () => {
        if (currentQuestion.order > 1) {
            setCurrentQuestion({ order: currentQuestion.order - 1, question: questions[currentQuestion.order - 1] });
        }
    }
    const onSubmitClick = () => {
        if (currentQuestion.order < questions.length) {
            setCurrentQuestion({ order: currentQuestion.order + 1, question: questions[currentQuestion.order] });
        }
        else {

        }
    }

    return (
        <div className="quiz-container">
            <TopBar />
            <div className="quiz-main-container">
                <Question order={currentQuestion.order}
                    question={currentQuestion.question}
                />
            </div>
            <div className="quiz-footer">
                <div className="quiz-footer-content">
                    <div className="quiz-footer-left">
                        {currentQuestion.order > 1 && <button className="action-button"
                            onClick={onPreviousButtonClick}>Review</button>
                        }
                    </div>
                    <div className="quiz-footer-right">

                        <button className="submit-button" onClick={onSubmitClick}>
                            Submit Answer
                        </button>
                        <button className="quit-button">
                            Quit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
