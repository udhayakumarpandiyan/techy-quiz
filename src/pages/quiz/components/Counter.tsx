import { FC, useEffect, useMemo, useState } from "react";
import { IDifficultyLevel } from "./Question";

interface CounterProps {
    level: IDifficultyLevel;
}
const Counter: FC<CounterProps> = ({ level }) => {
    const [counterValue, setCounterValue] = useState<number>(() => 100);
    let maxLevel = useMemo(() => {
        return level === 2 ? (1.5 * 60) : level * 60;
    }, []);

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
    }, []);

    return <progress value={counterValue} max={100} className="slide-in" />
}

export default Counter;