import { FC, useEffect, useState } from "react";
import { IDifficultyLevel } from "./Question";

interface CounterProps {
    level: IDifficultyLevel;
}
const Counter: FC<CounterProps> = ({level}) => {
    const [counterValue, setCounterValue] = useState<number>(() => 100);

    useEffect(() => {
        let interval: any;
        if (!interval) {
            interval = setInterval(() => {
                if (counterValue > 0) {
                    setCounterValue(prevValue => prevValue - 1);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [counterValue]);

    return <progress value={counterValue} max={100} className="slide-in" />
}

export default Counter;