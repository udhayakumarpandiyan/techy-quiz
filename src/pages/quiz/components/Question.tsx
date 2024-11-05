import { FC, useEffect, useState } from "react";
import Option from "./Option";
import Counter from "./Counter";

interface QuestionProps {
    question: IQuestion;
    order: number;
}
export enum IDifficultyLevel {
    Low = 1,
    Medium = 2,
    High = 3,
}
interface IQuestion {
    id: string,
    title: string,
    category: any,
    answerId: string,
    options: IOption[];
    difficultyLevel: IDifficultyLevel;
}
interface IOption {
    id: string,
    value: string,
    isAnswer: boolean
}
const Question: FC<QuestionProps> = ({ question, order }) => {
    return (<div className={`question-outer-container`}>
        <div>
            <label className="question-label">Question {order}</label>
            <Counter level={question.difficultyLevel} />
        </div>
        <div className="question-container">
            <p>{question.title}</p>
        </div>
        <label>Options</label>
        <div className="answers-container">
            {
                question.options?.map((option: IOption, index) => {
                    return <Option key={option.id} data={option} index={index}  />
                })
            }

        </div>
    </div>

    );
}

export default Question;
