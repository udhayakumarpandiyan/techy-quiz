import { FC, useEffect, useState } from "react";
interface OptionProps {
    data: IOption,
    index: number;
}
interface IOption {
    id: string,
    value: string,
    isAnswer: boolean
}
const Option: FC<OptionProps> = ({ data, index }) => {
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setAnimation('fade-in');
    }, [data]);

    const onContainerAnimationEnd = () => {
        setAnimation('');
    }
    return <div key={data.id} className={`option-container ${animation}`}
        style={{ animationDelay: `${index * 0.5}s` }} onAnimationEnd={onContainerAnimationEnd} >
        <input type="checkbox" id="option" name="option" className="option-checkbox" />
        <label htmlFor="option" className="option-label"> {data.value}</label>
    </div>
}
export default Option;