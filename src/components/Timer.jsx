import {useState, useEffect} from 'react';

export const Timer = ({finalValue, initialValue}) => {
    const [timer, setTimer] = useState(initialValue)

    useEffect(() => {
        const id = setInterval(() => {
            // console.log("Interval", timer);
            setTimer((prev) => {
                if(prev === finalValue){
                    clearInterval(id);
                    return finalValue;
                }
                return prev + 1;
            })
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])
    return <div>
        <h1>Timer: {timer}</h1>
    </div>
}