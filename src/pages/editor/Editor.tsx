import React, { FC, useRef, useState } from "react";
import TopBar from "../../components/TopBar";
import './Editor.css';
import { generateUUID } from "../../common/Helper";

interface EditorProps {
    title: string;

}
const options = [1, 2, 3, 4];

const categories = ["javascript", "dom", "react", "html", "css", "array", "string", "object"];
const difficultyLevel = [1, 2, 3];

const Editor: FC<EditorProps> = ({ title }) => {
    const [questions, setQuestions] = useState<any>(() => []);
    const [answers, setAnswers] = useState<any>(() => []);
    const [selectedCategory, setSelectedCategory] = useState<any>(() => categories[0]);
    const [selectedLevel, setSelectedLevel] = useState<any>(() => difficultyLevel[0]);

    let questionRef = useRef<any>(null);
    const refs = useRef(options.map(() => React.createRef<any>()));

    const onSubmitClick = () => {
        let question = {
            id: generateUUID(),
            title: questionRef.current?.value,
            category: selectedCategory,
            answerId: answers,
            options: [{ id: generateUUID(), value: refs.current[0].current?.value },
            { id: generateUUID(), value: refs.current[1].current?.value },
            { id: generateUUID(), value: refs.current[2].current?.value },
            { id: generateUUID(), value: refs.current[3].current?.value }
            ],
            difficultyLevel: selectedLevel,
        }
        const newQuestions: any[] = [...questions, question];
        setQuestions(newQuestions);
    }
    const onCategoryChange = (category: any) => {
        setSelectedCategory(category);
    }
    const onLevelChange = (level: any) => {
        setSelectedLevel(level);
    }
    const onOptionClick = (option: any, event: any) => {
        option -= 1;
        let newAnswers: any = [...answers];
        if (event.target.checked) {
            newAnswers.push(option);
        }
        else {
            let index = newAnswers.findIndex(option);
            if (index !== 1) {
                newAnswers.splice(index, 1);
            }
        }
        setAnswers(newAnswers);
    }
    return (
        <div className="quiz-container">
            <TopBar />
            <div className="quiz-main-container">
                <div className={`question-outer-container`}>
                    <div>
                        <label className="question-label">Question</label>
                    </div>
                    <div className="question-container">
                        <input ref={questionRef} placeholder="Type something here..." />
                    </div>
                    <label>Options</label>
                    <div className="answers-container">
                        {
                            options?.map((option, index) => {
                                return <div>
                                    <textarea ref={refs.current[index]}></textarea>
                                    <input type="checkbox" onChange={(e) => onOptionClick(option, e)} />
                                </div>
                            })
                        }

                    </div>
                </div>
                <div>
                    <select onChange={onLevelChange} value={selectedLevel}>
                        {
                            difficultyLevel?.map((level, index) => {
                                return <option key={level}>{level}</option>
                            })
                        }
                    </select>
                    <select onChange={onCategoryChange} value={selectedCategory}>
                        {
                            categories?.map((category, index) => {
                                return <option key={category}>{category}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="quiz-footer">
                <div className="quiz-footer-content">
                    <div className="quiz-footer-left">
                    </div>
                    <div className="quiz-footer-right">

                        <button className="submit-button" onClick={onSubmitClick}>
                            Submit Question
                        </button>
                        <button className="quit-button">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Editor;
